import React from 'react';
import Createtask from '../others/Createtask';
import Header from '../others/Header';
import Alltask from '../others/Alltask';

const Admindashboard = ({ changeUser, setLoggedInUserData }) => {
  return (
    <div className='h-screen w-full p-7'>
      <Header changeUser={changeUser} />
      <Createtask setLoggedInUserData={setLoggedInUserData} />
      <Alltask />
    </div>
  );
};

export default Admindashboard;