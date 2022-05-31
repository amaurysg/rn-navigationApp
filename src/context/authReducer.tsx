import {AuthState} from './AuthContext';

type AuthAction = {type: 'signIn'};

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

    default:
      return state;
  }
};
