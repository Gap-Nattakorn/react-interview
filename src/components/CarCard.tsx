import React from 'react';
import { convertNumberFormat } from '../utils';
import { Img } from 'react-image';

type CarCardProps = {
  photo: string;
  title: string;
  price: number;
  car: any;
  cartList: any[];
  handleAddToCart: (car: any) => void;
};

function CarCard(props: CarCardProps) {
  const { photo, title, price, handleAddToCart, car, cartList } = props;
  return (
    <div className='max-w-full rounded-xl overflow-hidden shadow-lg my-2 bg-white'>
      <Img
        className='w-full h-[50%] object-cover'
        src={[photo, 'assets/images/placeholder.png']}
        alt={title}
      />
      <div className='px-6 py-4 flex flex-col justify-between h-[50%]'>
        <div>
          <div className='font-bold text-xl mb-2'>{title}</div>
          <p className='text-grey-darker text-base'>{`${convertNumberFormat(
            price,
          )} THB/Day`}</p>
        </div>
        <button
          className='bg-blue-500 enabled:hover:bg-blue-700 disabled: text-white font-bold py-2 px-4 rounded w-full mt-4 disabled:opacity-50'
          onClick={() => {
            handleAddToCart(car);
          }}
          disabled={!!cartList?.find(cart => cart?.sys?.id === car?.sys.id)}
        >
          {cartList?.find(cart => cart?.sys?.id === car?.sys.id)
            ? 'Added'
            : 'Add to cart'}
        </button>
      </div>
    </div>
  );
}

export default CarCard;
