import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import './SuccessPopup.css';

const SuccessPopup = () => {
  const authContext = useContext(AuthContext);
  const {
    isSuccessOpen,
    handleLoginOpen,
    closeAllPopups,
  } = authContext;

  const openLogin = () => {
    closeAllPopups();
    handleLoginOpen();
  };

  return (
    <div className={`popup ${isSuccessOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          aria-label="close popup"
          onClick={closeAllPopups}
        />
        <div className="popup__form">
          <h3 className="popup__heading">Registration successfully completed!</h3>
          <button type="button" className="popup__message_link left-justified" onClick={openLogin}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
