import React from 'react';
import style from './Create.module.css';
import Button from '../../Button';

const HeaderCreate = () => {
  return (
    <div className={style.headerCreate}>
      <div className={style.subHeader}>
        <h2>
          Create And Sell Your Best NFTs <font color="#D6EF0E">Best NFTs.</font>
        </h2>
      </div>

      <div className={style.headerDesc}>
        <p>
          Start exploring the world of digital art and NFTs today and take
          control of your digital assets with confidence!
        </p>
      </div>

      <div className={style.actions}>
        <Button onClick={'onClick'} buttonName={'Create Now'}></Button>
        <div>
          <h6>Learn More</h6>
        </div>
      </div>
    </div>
  );
};

export default HeaderCreate;
