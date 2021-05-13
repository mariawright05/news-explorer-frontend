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
    <div className={`successPopup ${isSuccessOpen ? 'successPopup_opened' : ''}`}>
      <div className="successPopup__container">
        <button
          type="button"
          className="successPopup__close-button"
          aria-label="close successPopup"
          onClick={closeAllPopups}
        />
        <div className="successPopup__form">
          <h3 className="successPopup__heading">Registration successfully completed!</h3>
          <button type="button" className="successPopup__message_link left-justified" onClick={openLogin}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
