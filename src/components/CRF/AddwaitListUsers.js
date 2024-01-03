import React, { useState, useEffect } from 'react';
import { getWaitListEmails, postWaitListUser } from '/services/API/api-helper';
import 'tailwindcss/tailwind.css';

const WaitListUsers = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [userList, setUserList] = useState([]);
  const [successFlag, setSuccessFlag] = useState(false);
  const [failureFlag, setFailureFlag] = useState(false);
  const [loading, setLoading] = useState(false);
  const [excludeInternal, setExcludeInternal] = useState(false);
  const [excludeReceivedUsers, setExcludeReceivedUsers] = useState(false);
  const [loadingFlag, setLoadingFlag] = useState(true);
  const [allApiCallsFlag, setAllApiCallsFlag] = useState(true);

  useEffect(() => {
    getEmailsList();
  }, []);

  const handleUserListItemSelect = (users) => {
    setSelectedEmails(users.map((item) => item.email));
  };

  const getEmailsList = async () => {
    try {
      const response = await getWaitListEmails();
      setUserList(response.data);
      setLoadingFlag(false);
    } catch (error) {
      console.error('Error fetching emails list:', error);
    }
  };

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const sendEmails = async () => {
    setLoading(true);
    const dividedArray = chunkArray(selectedEmails, 5);

    for (const selectedArray of dividedArray) {
      const payloadArray = selectedArray.map((item) => ({
        email: item.email ? item.email : '',
        companyname: item.companyName ? item.companyName : 'NA',
        firstname: item.firstname ? item.firstname : '',
        lastname: item.lastname ? item.lastname : '',
        requester: item.requesterID ? item.requesterID : '',
        requester_fullname: item.requester_fullname ? item.requester_fullname : '',
        iocFlag: true,
      }));

      try {
        const data = await postWaitListUser(payloadArray);
        if (data.message === 'Free trial shared successfully') {
          payloadArray.forEach((element) => {
            const selectedEmail = element.email;
            setUserList((prevUserList) => prevUserList.filter((user) => user.email !== selectedEmail));
          });
        } else {
          setAllApiCallsFlag(false);
          break;
        }
      } catch (error) {
        console.error('Error during email sending:', error);
        setAllApiCallsFlag(false);
        setTimeout(() => {
          setFailureFlag(true);
        }, 6000);
      }
    }

    setLoading(false);
    setSuccessFlag(allApiCallsFlag);

    if (successFlag) {
      setTimeout(() => {
        setSuccessFlag(false);
      }, 6000);
    } else {
      setTimeout(() => {
        setFailureFlag(true);
      }, 6000);
    }

    setSelectedEmails([]);
  };

  const handleIncludeTestUsersFilter = async () => {
    setLoadingFlag(true);
    const response = await getWaitListEmails(!excludeInternal, !excludeReceivedUsers);
    setUserList(response.data);
    setLoadingFlag(false);
  };

  const handleIncludeReceivedUsersFilter = async () => {
    setLoadingFlag(true);
    const response = await getWaitListEmails(!excludeInternal, !excludeReceivedUsers);
    setUserList(response.data);
    setLoadingFlag(false);
  };

  return (
    <div className="container mx-auto">
      {/* Your JSX code goes here */}
    </div>
  );
};

export default WaitListUsers;
