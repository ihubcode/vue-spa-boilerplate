import { root, list } from '../commons/action-types';
import { getOrderStatusLabel } from '../commons/index';

// initial state
const state = {
	error: undefined,
	items: [],
	codeurl: {}
};
const __state = Object.assign({}, state);

// mutations
const mutations = {
	/**
	 * init
	 */
	[root.RESET] (state) {
		Object.assign(state, __state);
	},

	/**
	 * list data loaded
	 */
	[list.LIST_LOADED] (state, data) {
		const { items, page=1 } = data;
		if(page === 1) {
			state.items = [];
		}
		for(const item of items) {
			item.createdAt = new Date(item.created_at).format('yyyy.MM.dd');
			item.statusLabel = getOrderStatusLabel(item.status);
			state.items.push(item);
		}
	},
	/**
	 * list data error
	 */
	[list.LIST_ERROR] (state, error) {
		state.error = error;
	}

};

export default { state, mutations };
