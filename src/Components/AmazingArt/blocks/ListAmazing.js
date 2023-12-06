import React from 'react';
import AmazingCard from './AmazingCard';
import pic_1 from './picArt_1.png';
import pic_2 from './picArt_2.png';
import pic_3 from './picArt_3.png';
import style from './Amazing.module.css';

const ListAmazing = () => {
  return (
    <div className={style.listAmazing}>
      <AmazingCard pic={pic_1} description={'Cyberpunk Cocomo'} />
      <AmazingCard pic={pic_2} description={'Charge, Qi tiao yu'} />
      <AmazingCard pic={pic_3} description={'Surgeon, Josh Rife'} />
    </div>
  );
};

export default ListAmazing;
