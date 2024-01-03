import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const formatCounts = (count) => {
  if (count < 1000) {
    if (count.toString().includes('.')) {
      return count.toFixed(2);
    }
    return count;
  }

  const kCount = count / 1000;
  return kCount.toString().includes('.') ?
    `${kCount.toString().split('.')[0]}K+`
    : `${kCount}K`;
};

const CardMetric = ( props ) => {
  const formattedNumber = formatCounts(props.count);
  return (
    <Paper className="w-[250px] h-[250px] p-4 rounded-lg mx-auto mt-8">
      <div className="">
        <Typography className='text-stone-500'>
          {props.title}
        </Typography>
      </div>
      <div className="metricCountContainer">
        <Tooltip title={`Actual value: ${props.count}`} placement="bottom"> 
          <Typography variant="h2" className="text-indigo-600">
            {formattedNumber}
          </Typography>
          </Tooltip>
      </div>
    </Paper>
  );
};

export default CardMetric;