import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const useAuth = () => {
  const userInfo=use(AuthContext)
  return userInfo
};

export default useAuth;