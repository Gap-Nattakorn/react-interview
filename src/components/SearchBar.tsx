import React from 'react';

function SearchBar() {
  return (
    <div className='h-[100px] bg-white flex justify-between items-center px-[40px]'>
      <div>
        <p className='text-3xl font-semibold'>Car Available</p>
      </div>
      <div className='flex gap-2'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='searchCar'
          type='text'
          placeholder='Search Car'
        />
        <select
          className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
          id='grid-state'
        >
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
