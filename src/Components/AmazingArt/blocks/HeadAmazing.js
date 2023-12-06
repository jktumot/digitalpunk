import React from 'react';
import Button from '../../Button';
import style from './Amazing.module.css';

const HeadAmazing = () => {
  return (
    <div className={style.amazingBox}>
      <div className={style.headAmazing}>
        <h2 className={style.headAm}>
          <font color="#D6EF0E">Amazing</font> and Super Unique Art of This{' '}
          <font color="#D6EF0E">Week</font>
        </h2>
      </div>
      <Button buttonName={'See All'} />
    </div>
  );
};

export default HeadAmazing;
