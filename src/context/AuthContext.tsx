import React from 'react'
import {createContext} from 'react';

//Define data that you want have !
export interface AuthState {
  isLoggedIn?: boolean;
  username?: string;
}
//Define Initial State
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: 'Amaury',
};

// Lo usaremos, para decirle a React como luce y qué expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}
//Create context
export const AuthContext = createContext({} as AuthContextProps);

//Component that provide state !
export const AuthProvider = ({children}: any) => {
  return (
    <AuthContext.Provider
      value={{authState: authInitialState, signIn: () => {}}}>
      {children}
    </AuthContext.Provider>
  );
};
