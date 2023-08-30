import React from 'react';
import { convertNumberFormat } from '../utils';
import { Img } from 'react-image';

function CarCard(props: any) {
  const { photo, title, price } = props;
  return (
    <div className='max-w-xs rounded-xl overflow-hidden shadow-lg my-2'>
      <Img
        className='w-full h-[185px]'
        src={[photo, 'assets/images/placeholder.png']}
        alt={title}
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-grey-darker text-base'>{`${convertNumberFormat(
          price,
        )} THB/Day`}</p>
      </div>
    </div>
  );
}

export default CarCard;
