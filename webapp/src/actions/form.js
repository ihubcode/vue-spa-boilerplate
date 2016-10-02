import { form } from '../action-types';
import http from '../utils/http';

/**
 * save
 */
export const save = ({ dispatch }, obj) => {
	dispatch(form.SAVE_REQUEST);
	
	setTimeout(() => {
		http.get('/static/assets/form.json', obj)
			.then((result) => dispatch(form.SAVE_SUCCESS, result))
			.catch((error) => dispatch(form.SAVE_FAILURE, error));
	}, 1000);
};
