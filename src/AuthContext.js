import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthenticated: false });

  // Предоставляем auth и setAuth через контекст
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
