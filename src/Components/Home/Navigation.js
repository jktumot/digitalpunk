import React from 'react';
import Button from '../Button';
import style from './Home.module.css';

const Navigation = () => {
  return (
    <div className={style.navBar}>
      <div className={style.navbarLinksContainer}>
        <a href="/">Marketplace</a>
        <a href="/">Artists</a>
        <a href="/">Community</a>
        <a href="/">Collections</a>
      </div>
      <Button buttonName={'Contact'}></Button>
    </div>
  );
};

export default Navigation;
