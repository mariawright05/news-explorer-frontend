import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContext);
  const { isAuth } = authContext;

  return (
    <Route>
      {() => {
        return isAuth
          // eslint-disable-next-line react/jsx-props-no-spreading
          ? <Component {...props} />
          : <Redirect to="/" />;
      }}
    </Route>
  );
};

export default ProtectedRoute;
