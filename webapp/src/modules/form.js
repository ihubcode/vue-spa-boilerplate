import { root, form } from '../action-types';

// initial state
const state = {
	error: undefined,
	saveResp: undefined,
	isLoading: false,
	userinfo: {
		email: 'jkguang@126.com'
	}
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
	 * save
	 */
	[form.SAVE_REQUEST] (state) {
		state.isLoading = true;
	},
	[form.SAVE_SUCCESS] (state, resp) {
		state.isLoading = false;
		state.saveResp = resp;
	},
	[form.SAVE_FAILURE] (state, error) {
		state.error = error;
		state.isLoading = false;
	}
};

export default { state, mutations };
