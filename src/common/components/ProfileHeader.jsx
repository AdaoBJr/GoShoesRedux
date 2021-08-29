import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { FaCamera } from 'react-icons/fa';

import imgDefault from '../../files/images/profile.jpg';

export default function ProfileHeader() {
  const [showImg, setShowImg] = useState(false);
  const [photo, setPhoto] = useState('');
  const { user: { users } } = useSelector((state) => state);

  const previewPhoto = () => {
    const Users = [...users];

    // FIND USER ACTIVE
    const findUser = Users.find((item) => item.active);

    setPhoto(findUser.photo);
  };

  const renderProfile = () => (
    <>
      <div className={(showImg) ? 'bigImgProfile showImage' : 'bigImgProfile'}>
        <img src={photo || imgDefault} alt="img-profile" />
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
            <img src={photo || imgDefault} className="imageProfile" alt="img-profile" />
            <div
              aria-hidden
              className="bgCamera"
              onClick={() => setShowImg(!showImg)}
            >
              <FaCamera className="cameraIcon" />
            </div>
          </div>
          <div className="profileData">
            <h3 className="userName">{ `Usuário : ${users.filter((item) => item.active)[0].userName}` }</h3>
            <h3 className="email">{ `E-mail : ${users.filter((item) => item.active)[0].email}` }</h3>
          </div>
        </div>
      </div>
    </>
  );

  // CICLOS DE VIDA --------------------------------------------------------------------------

  useEffect(previewPhoto, [users]);

  // ------------------------------------------------------------------------------------------

  return (
    renderProfile()
  );
}
