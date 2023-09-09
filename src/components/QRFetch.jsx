import QRCode from 'qrcode.react';
import React from 'react'

const QRFetch = ({user}) => {

  const userDataString = JSON.stringify(user);
    
  return (
    <div className='qrfetch'>
      <h2>User QR Code</h2>
      <QRCode className='code' value={userDataString} />
      <p>Name : {user.name}</p>
    </div>
  )
}

export default QRFetch;
