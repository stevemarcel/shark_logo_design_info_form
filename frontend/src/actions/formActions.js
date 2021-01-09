import axios from 'axios';
import {
  FORM_SUBMIT_FAIL,
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_RESET,
  FORM_SUBMIT_SUCCESS,
} from '../constants/formConstants';

export const formSubmit = (form) => async (dispatch) => {
  try {
    dispatch({ type: FORM_SUBMIT_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`/api/forms`, form, config);

    dispatch({
      type: FORM_SUBMIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORM_SUBMIT_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
