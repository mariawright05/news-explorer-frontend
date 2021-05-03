import React from 'react';
import LoginPopup from '../LoginPopup/LoginPopup';
import SuccessPopup from './SuccessPopup';

const Popup = (props) => {
  const { popupType } = props;

  return (
    <div>
      {popupType === 'signin' && <LoginPopup />}
      {popupType === 'success' && <SuccessPopup />}
    </div>
  );
};

export default Popup;
