import React from 'react'

const CounterCard = ({itemName, itemTotal, bg1 = 'bg-indigo-700', bg2 = 'bg-gray-300'}) => {
    //inline-block bg-gray-400 text-white px-10 py-12
  return (
    <div className='grid grid-cols-2 md:grid-rows-1 gap-1'>
      <div className={`${bg1} text-white px-20 py-10`}>{itemName}</div>
      <div className={`${bg2} px-10 py-10`} >{itemTotal}</div>
    </div>
  );
};

export default CounterCard;
