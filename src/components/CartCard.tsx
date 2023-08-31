import React from 'react';
import { convertNumberFormat } from '../utils';
import { Img } from 'react-image';

type CartCardProps = {
  photo: string;
  title: string;
  price: number;
  count: number;
  handleIncreaseCar: (car: any) => void;
  handleDecreaseCar: (car: any) => void;
  car: any;
};

function CartCard(props: CartCardProps) {
  const {
    photo,
    title,
    price,
    count,
    handleIncreaseCar,
    handleDecreaseCar,
    car,
  } = props;
  return (
    <>
      <div className='flex justify-between rounded-lg h-[60px] bg-white w-full md:flex-row pr-2'>
        <div className='flex gap-2'>
          <Img
            className='w-[100px] h-[50px] rounded-t-lg object-cover md:!rounded-none md:!rounded-l-l hidden md:block'
            src={[photo, 'assets/images/placeholder.png']}
            alt=''
          />
          <div className='flex flex-col'>
            <p className='font-bold text-base'>{title}</p>
            <p className='text-sm'>{`${convertNumberFormat(price)} THB/Day`}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-[30px] h-[30px] rounded'
            onClick={() => {
              handleDecreaseCar(car);
            }}
          >
            -
          </button>
          <p className='mx-2'>{count}</p>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-[30px] h-[30px] rounded'
            onClick={() => {
              handleIncreaseCar(car);
            }}
          >
            +
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CartCard;
