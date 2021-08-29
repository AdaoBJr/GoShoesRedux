import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { FaCamera } from 'react-icons/fa';

import profileImg from '../../files/images/profile.jpg';

export default function ProfileHeader() {
  const [showImg, setShowImg] = useState(false);
  const { user: { users } } = useSelector((state) => state);

  const renderProfile = () => (
    <>
      <div className={(showImg) ? 'bigImgProfile showImage' : 'bigImgProfile'}>
        <img src={profileImg} alt="img-profile" />
        <button
          type="button"
          aria-hidden
          className="close"
          onClick={() => setShowImg(!showImg)}
        />
      </div>
      <div className="profileCard">
        <div className="profileContent">
          <div>
            <img src={profileImg} className="imageProfile" alt="img-profile" />
            <div
              aria-hidden
              className="bgCamera"
              onClick={() => setShowImg(!showImg)}
            >
              <FaCamera className="cameraIcon" />
            </div>
          </div>
          <div className="profileData">
            {/* <div> */}
            <h3 className="userName">{ `Usuário : ${users.filter((item) => item.active)[0].userName}` }</h3>
            <h3 className="email">{ `E-mail : ${users.filter((item) => item.active)[0].email}` }</h3>
            {/* </div> */}
            {/* <input type="file" /> */}
          </div>
        </div>
      </div>
    </>
  );

  return (
    renderProfile()
  );
}
