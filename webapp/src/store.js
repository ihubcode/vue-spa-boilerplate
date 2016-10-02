import Vue from 'vue';
import Vuex from 'vuex';
// import createLogger from 'vuex/src/plugins/logger';

import list from './modules/list';
import form from './modules/form';
import widgets from './modules/widgets';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
Vue.config.debug = debug;

export default new Vuex.Store({
	modules: {
		list,
		form,
		widgets
	},
	strict: debug
	// middlewares: [createLogger()]
	// plugins: debug ? [createLogger()] : []
});
