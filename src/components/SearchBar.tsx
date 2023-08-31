import React from 'react';

type SearchBarProps = {
  getQueryOrderCarList: (attr: string, order: string) => void;
  getQueryTitleCarList: (title: string) => void;
};

function SearchBar(props: SearchBarProps) {
  const { getQueryOrderCarList, getQueryTitleCarList } = props;

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value != null) {
      const valueSplit = value?.split('|');
      getQueryOrderCarList(valueSplit[1], valueSplit[0]);
    }
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    getQueryTitleCarList(event.target.value);
  };

  return (
    <div className='md:h-[100px] bg-white flex flex-col md:flex-row justify-between md:items-center px-[20px] md:px-[40px] mt-3 gap-2 md:gap-0 py-3 md:py-0'>
      <div>
        <p className='text-3xl font-semibold'>Car Available</p>
      </div>
      <div className='flex flex-col md:flex-row gap-2 w-full md:w-[inherit]'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='searchCar'
          type='text'
          placeholder='Search Car'
          onChange={onSearchChange}
        />
        <div className='relative w-full'>
          <select
            className='block w-full appearance-none border shadow text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline'
            onChange={selectChange}
          >
            <option value='asc|fields.price'>Price: Low - High</option>
            <option value='desc|fields.price'>Price: High - Low</option>
            <option value='asc|fields.title'>Title: A - Z</option>
            <option value='desc|fields.title'>Title: Z - A</option>
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
            <svg
              className='fill-current h-4 w-4'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
