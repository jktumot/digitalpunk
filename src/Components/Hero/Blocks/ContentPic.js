import React from 'react';
import style from './Contents.module.css';
import pic from './pic_1.png';
import picFx from './pic_fx.png';

const ContentPic = () => {
  return (
    <>
      <div className={style.contentPic}>
        <div className={style.pic_1}>
          <img src={pic} alt="" style={{ width: 464, height: 544 }} />
        </div>
        <div className={style.picFx}>
          <img src={picFx} alt="" style={{ width: 172, height: 172 }} />
        </div>
        <div className={style.bid}>
          <div className={style.alertBid}>
            <div className={style.time}>
              <p>
                <font color="#D6EF0E">Ends in</font>
              </p>
              <p>05:45:47</p>
            </div>
            <div className={style.time}>
              <p>
                <font color="#D6EF0E">Current bid</font>
              </p>
              <p>0.24ETH</p>
            </div>
          </div>
          <div className={style.place}>
            <p>Place A Bid</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentPic;
