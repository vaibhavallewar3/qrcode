import React from 'react'
import QRFetch from './QRFetch';

const User = () => {

    const userData = [
      {id:1, name:"Test 987", email:"test987@gmail.com", mobile:"9876543210"},
      {id:2, name:"Test 654", email:"test654@gmail.com", mobile:"6549873210"},
      {id:3, name:"Test 321", email:"test321@gmail.com", mobile:"3219876540"},
    ];

  return (
    <div className='user'>
      {userData.map((user) => (
        <QRFetch user={user} key={user.id} />
      ))}
    </div>
  )
}

export default User;
