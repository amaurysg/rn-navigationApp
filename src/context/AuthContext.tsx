import React, {useReducer} from 'react';
import {createContext} from 'react';
import {authReducer} from './authReducer';

//Define data that you want have !
export interface AuthState {
  isLoggedIn?: boolean;
  username?: string;
}
//Define Initial State
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: 'undefined',
};

// Lo usaremos, para decirle a React como luce y qué expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logOut?: () => void;
  changeName?: (username: string) => void;
}
//Create context
export const AuthContext = createContext({} as AuthContextProps);

//Component that provide state !
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);
  const signIn = () => {
    dispatch({type: 'signIn'});
  };
  const logOut = () => {
    dispatch({type: 'logOut'});
  };
  const changeName = (username: string) => {
    dispatch({type: 'changeName', payload: username});
  };

  return (
    <AuthContext.Provider value={{authState, signIn, logOut, changeName}}>
      {children}
    </AuthContext.Provider>
  );
};
