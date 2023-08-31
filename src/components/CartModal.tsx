import React, { useEffect, useMemo, useState, useRef } from 'react';
import CartCard from './CartCard';
import { convertNumberFormat } from '../utils';

type CartModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  cartList?: any[];
  handleIncreaseCar: (car: any) => void;
  handleDecreaseCar: (car: any) => void;
};

function CartModal(props: CartModalProps) {
  const {
    showModal,
    setShowModal,
    cartList,
    handleIncreaseCar,
    handleDecreaseCar,
  } = props;
  const [discount, setDiscount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const total = useMemo(() => {
    if (cartList && cartList?.length > 0) {
      return cartList?.reduce((acc, curr) => {
        return acc + curr?.count * curr?.fields?.price;
      }, 0);
    }
    return 0;
  }, [cartList]);

  const grandTotal = useMemo(() => {
    return total - discount;
  }, [total, discount]);

  const onChangeDiscount = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'DH50') {
      setDiscount(total * 0.5);
    } else {
      setDiscount(0);
    }
  };

  useEffect(() => {
    if (
      typeof inputRef?.current?.value == 'string' &&
      inputRef?.current?.value === 'DH50'
    ) {
      setDiscount(total * 0.5);
    }
  }, [total]);

  return (
    <>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative my-6 mx-auto w-full md:w-[70%] lg:w-[60%] xl:w-[40%]'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-3xl font-semibold'>Cart</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black float-right text-lg leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <div className='flex flex-col overflow-y-auto max-h-[300px] gap-2'>
                    {cartList && cartList?.length > 0 ? (
                      cartList?.map((cart, index) => {
                        return (
                          <CartCard
                            {...cart?.fields}
                            count={cart?.count}
                            key={index}
                            handleIncreaseCar={handleIncreaseCar}
                            handleDecreaseCar={handleDecreaseCar}
                            car={cart}
                          />
                        );
                      })
                    ) : (
                      <div className='flex items-center justify-center h-[120px]'>
                        <p>No Car</p>
                      </div>
                    )}
                  </div>
                  <div className='p-4 my-2 rounded bg-[#F3F4F6]'>
                    {' '}
                    <input
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='discountCode'
                      type='text'
                      placeholder='Discount code (fill "DH50" to discount 50 %)'
                      onChange={onChangeDiscount}
                      ref={inputRef}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex justify-between my-2'>
                      <p className='font-bold'>Total</p>
                      <p>{`${convertNumberFormat(total)} THB`}</p>
                    </div>
                    <hr />
                    <div className='flex justify-between my-2'>
                      <p className='font-bold'>Discount</p>
                      <p>{`${convertNumberFormat(discount)} THB`}</p>
                    </div>
                    <hr />
                    <div className='flex justify-between my-2'>
                      <p className='font-bold'>Grand Total</p>
                      <p>{`${convertNumberFormat(grandTotal)} THB`}</p>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                {/* <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}

export default CartModal;
