import React, {useReducer} from 'react';
import {createContext} from 'react';
import { authReducer } from './authReducer';

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
}
//Create context
export const AuthContext = createContext({} as AuthContextProps);

//Component that provide state !
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer( authReducer , authInitialState);
  const signIn = () =>{
    dispatch({type:'signIn'})
  }

  return (
    <AuthContext.Provider
      value={{authState, signIn: signIn}}>
      {children}
    </AuthContext.Provider>
  );
};
