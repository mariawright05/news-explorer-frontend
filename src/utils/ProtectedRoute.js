import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const ProtectedRoute = ({ component: Component }) => {
  const authContext = useContext(AuthContext);
  const { handleLoginOpen } = authContext;

  const token = localStorage.getItem('jwt');

  useEffect(() => {
    if (!token) {
      handleLoginOpen();
    }
  }, []);

  return (
    <Route>
      {() => {
        if (token) {
          return <Component />;
        }
        return <Redirect to="/" />;
      }}
    </Route>
  );
};

export default ProtectedRoute;
