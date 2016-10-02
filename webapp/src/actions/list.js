import { list } from '../action-types';
import utils from '../utils/utils';

/**
 * setup data
 */
export const setupData = ({ dispatch }, raw) => {
	const result = raw.result;
	if(!raw.success) {
		dispatch(list.LIST_ERROR, utils.error(result.message));
	} else {
		dispatch(list.LIST_LOADED, {
			items: result.items,
			page: result.page
		});
	}
};
