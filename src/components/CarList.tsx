import { memo } from 'react';
import CarCard from './CarCard';

type CarListProps = {
  carList: any[];
  cartList: any[];
  handleAddToCart: (car: any) => void;
};

function CarList(props: CarListProps) {
  const { carList, handleAddToCart, cartList } = props;
  return (
    <div className='px-[20px] md:px-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  py-4 md:py-8 mb-20'>
      {carList?.map((car: any, index: number) => (
        <CarCard
          {...car?.fields}
          car={car}
          key={index}
          handleAddToCart={handleAddToCart}
          cartList={cartList}
        />
      ))}
    </div>
  );
}

export default memo(CarList);
