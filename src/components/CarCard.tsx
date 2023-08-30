import React from 'react';
import { convertNumberFormat } from '../utils';
import { Img } from 'react-image';

function CarCard(props: any) {
  const { photo, title, price } = props;
  return (
    <div className='max-w-full rounded-xl overflow-hidden shadow-lg my-2 bg-white'>
      <Img
        className='w-full h-[50%] object-cover'
        src={[photo, 'assets/images/placeholder.png']}
        alt={title}
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-grey-darker text-base'>{`${convertNumberFormat(
          price,
        )} THB/Day`}</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4'>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default CarCard;
