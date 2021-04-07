import React from 'react';
import SigninPopup from './SigninPopup';
import SignupPopup from './SignupPopup';
import SuccessPopup from './SuccessPopup';

const Popup = (props) => {
  const { popupType } = props;

  return (
    <div>
      {popupType === 'signin' && <SigninPopup />}
      {popupType === 'signup' && <SignupPopup />}
      {popupType === 'success' && <SuccessPopup />}
    </div>
  );
};

export default Popup;
