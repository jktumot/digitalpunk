import React from 'react';
import Button from '../../Button';
import style from './Contents.module.css';

const Content = () => {
  return (
    <div className={style.content}>
      <div className={style.header}>
        <div className={style.subHeader}>
          <h1>
            Discover and Collect The Best NFTs{' '}
            <font color="#D6EF0E">Digital Art.</font>
          </h1>
        </div>

        <div className={style.headerDesc}>
          <p>
            Get started with the easiest and most secure platform to buy and
            trade digital ART and NFT’s. Start exploring the world of digital
            art and NFTs today and take control of your digital assets with
            confidence!
          </p>
        </div>

        <div className={style.actions}>
          <Button onClick={'onClick'} buttonName={'Explore Now'}></Button>
          <div>
            <h6>Learn More</h6>
          </div>
        </div>
      </div>

      <div className={style.stars}>
        <div className={style.starsItem}>
          <h2>
            <font color="#D6EF0E">8.9</font>K
          </h2>
          <p>Art work</p>
        </div>
        <div className={style.starsItem}>
          <h2>
            <font color="#D6EF0E">65</font>K
          </h2>
          <p>Artist</p>
        </div>
        <div className={style.starsItem}>
          <h2>
            <font color="#D6EF0E">87</font>K
          </h2>
          <p>Collection</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
