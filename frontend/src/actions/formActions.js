import axios from 'axios';
import {
  FORM_CREATE_FAIL,
  FORM_CREATE_REQUEST,
  FORM_CREATE_SUCCESS,
} from '../constants/formConstants';

export const createForm = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: FORM_CREATE_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`/api/forms`, { formData }, config);

    dispatch({
      type: FORM_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORM_CREATE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
