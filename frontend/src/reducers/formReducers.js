import {
  FORM_SUBMIT_FAIL,
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_RESET,
  FORM_SUBMIT_SUCCESS,
} from '../constants/formConstants';

export const formSubmitReducer = (state = { form: {} }, action) => {
  switch (action.type) {
    case FORM_SUBMIT_REQUEST:
      return { loading: true };
    case FORM_SUBMIT_SUCCESS:
      return { loading: false, success: true, formData: action.payload };
    case FORM_SUBMIT_FAIL:
      return { loading: false, error: action.payload };
    case FORM_SUBMIT_RESET:
      return { form: {} };
    default:
      return state;
  }
};
