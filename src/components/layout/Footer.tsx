import React from 'react';

function Footer() {
  return (
    <div className='app-footer h-fit md:h-[80px] px-[20px] md:px-[40px] flex-col md:flex-row items-start md:items-center justify-between'>
      <div className='flex flex-col justify-end items-start h-full py-4'>
        <p className='text-base font-semibold'>Drivehub Co.,Ltd</p>
        <p className='text-xs font-normal text-left'>
          193-195 Lake Rajada Office Complex, <br />
          Ratchadapisek road, Khlong Toei, Bangkok
        </p>
      </div>
      <div className='flex flex-col justify-end h-full py-4'>
        <p className='text-xs font-normal'>
          © Drivehub {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default Footer;
