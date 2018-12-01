export function loginReducer(state = {
  loginBtnEnabledStatus: true,
  errMsg: '',
  userDetails: '',
}, action) {
  let latestState = {};
  switch (action.type) {
    case 'TOGGLE_LOGIN_BTN_STATUS':
      latestState = { ...state, loginBtnEnabledStatus: action.status };
      break;
    case 'LOGIN_ERROR_MESSAGE':
      latestState = { ...state, errMsg: action.message };
      break;
    case 'LOGGEDIN_USER_DETAILS_SAVE':
      latestState = { ...state, userDetails: action.details };
      break;
    default:
      latestState = state;
  }

  return latestState;
};
