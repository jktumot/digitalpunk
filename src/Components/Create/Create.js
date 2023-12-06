import React from 'react';
import CreatePic from './Blocks/CreatePic';
import HeaderCreate from './Blocks/HeaderCreate';

const Create = () => {
  return (
    <div className="createBox">
      <HeaderCreate />
      <CreatePic />
    </div>
  );
};

export default Create;
