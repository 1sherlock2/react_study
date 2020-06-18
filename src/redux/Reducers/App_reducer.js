import { authThunk } from './Auth_reducer';

const INITIALIZE = 'INITIALIZE';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

const initialized = () => ({ type: INITIALIZE });

export const initializedThunk = () => (dispatch) => {
  const promise = dispatch(authThunk());

  Promise.all([promise]).then(() => { dispatch(initialized()); });
};

export default appReducer;
