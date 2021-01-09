import {
  FORM_CREATE_FAIL,
  FORM_CREATE_REQUEST,
  FORM_CREATE_RESET,
  FORM_CREATE_SUCCESS,
} from '../constants/formConstants';

export const formCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case FORM_CREATE_REQUEST:
      return { loading: true };
    case FORM_CREATE_SUCCESS:
      return { loading: false, success: true, form: action.payload };
    case FORM_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case FORM_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
