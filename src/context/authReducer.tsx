import {AuthState} from './AuthContext';

type AuthAction = {type: 'signIn'} | {type: 'logOut'}| {type: 'changeName', payload: string};

//Siempre debe retonar un estado de tipo AuthState
export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-user-name-yet',
      };
    case 'logOut':
      return {
        ...state,
        isLoggedIn:false,
        username: undefined,
      };
    case 'changeName':
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
