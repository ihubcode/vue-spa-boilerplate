import { widgets } from '../types';
/**
 * load
 */
export const load = ({ dispatch }) => {
	dispatch(widgets.LOAD_REQUEST);
	setTimeout(() => {
		dispatch(widgets.LOAD_SUCCESS, true);
	}, 2000);
};
