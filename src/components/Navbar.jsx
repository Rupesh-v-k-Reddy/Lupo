import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {
  return (
    <div className="bg-slate-400 text-white h-screen p-4 fixed left-0 caret-transparent">
      <ul>
      <Tooltip title='Home-Overall metrics of the Company' placement="right-start">
        <li className="flex flex-col items-center mb-4">
         <HomeOutlinedIcon className='mb-1'/>
          Home
        </li>
        </Tooltip>
        <Tooltip title='Value Metrics' placement="right-start">
        <li className="flex flex-col items-center mb-4">
        <AssessmentOutlinedIcon className='mb-1'/>
         Metrics
        </li>
        </Tooltip>
        <Tooltip title='CRF-CR Forms to manage customer account management' placement="right-start">
        <li className="flex flex-col items-center mb-4">
        <EditNoteOutlinedIcon className='mb-1'/>
         CRF
        </li>
        </Tooltip>
      </ul>
    </div>
  );
};

export default Navbar;
