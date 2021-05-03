import React from 'react';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from './RegisterPopup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';

const Popup = (props) => {
  const { popupType } = props;

  return (
    <div>
      {popupType === 'signin' && <LoginPopup />}
      {popupType === 'signup' && <RegisterPopup />}
      {popupType === 'success' && <SuccessPopup />}
    </div>
  );
};

export default Popup;
