import React from 'react';
import style from './Amazing.module.css';
import { FaRegClock } from 'react-icons/fa';

const AmazingCard = ({ pic, description }) => {
  return (
    <div>
      <div className={style.card}>
        <img src={pic} alt=""></img>
        <div className={style.cardDescription}>
          <div className={style.headDesc}>
            <h4>{description}</h4>
            <p>¥490ETH™</p>
          </div>
          <dic className={style.placeCard}>
            <div className={style.cardTime}>
              <div>
                <p>Ending In</p>
              </div>
              <div>
                <p className={style.timeIcon}>
                  <FaRegClock />
                  <p>03:24:56</p>
                </p>
              </div>
            </div>
            <div className={style.placeBid}>
              <p>
                <font color="#D6EF0E">Place A Bid</font>
              </p>
            </div>
          </dic>
        </div>
      </div>
    </div>
  );
};

export default AmazingCard;
