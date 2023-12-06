import React from 'react';
import style from './Create.module.css';
import pic_1 from './picCreate_1.svg';
import pic_2 from './picCreate_2.svg';

const CreatePic = () => {
  return (
    <div className={style.createPic}>
      <div className={style.picCreate_1}>
        <img src={pic_1} alt="" style={{ width: 410, height: 400 }}></img>
      </div>
      <div className={style.picCreate_2}>
        <img src={pic_2} alt="" style={{ width: 410, height: 475 }}></img>
      </div>
    </div>
  );
};

export default CreatePic;
