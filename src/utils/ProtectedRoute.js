import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const ProtectedRoute = ({ component: Component }) => {
  const authContext = useContext(AuthContext);
  const { handleLoginOpen } = authContext;

  const token = localStorage.getItem('jwt');

  return (
    <Route>
      {() => {
        if (token) {
          return <Component />;
        }
        handleLoginOpen();
        return <Redirect to="/" />;
      }}
    </Route>
  );
};

export default ProtectedRoute;
