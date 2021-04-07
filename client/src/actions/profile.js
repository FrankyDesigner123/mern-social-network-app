import api from '../utils/api';
import { setAlert } from './alert';

import { GET_PROFILE, PROFILE_ERROR } from './types';

//Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
	try {
		const res = await api.get('/profile/me');

		dispatch({
			type: GET_PROFILE,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// create or update profile
export const createProfile = (formData, history, edit = false) => async (
	dispatch
) => {
	try {
		const res = await api.post('/profile', formData);

		dispatch({
			type: GET_PROFILE,
			patload: res.data,
		});

		dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

		if (!edit || edit) {
			history.push('/dashboard');
		}
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}

		dispatch({
			type: PROFILE_ERROR,
			patload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
