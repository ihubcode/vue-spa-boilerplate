/***
 * action types
 *
 * each of types will be exports
 *
 * 		user.LOAD will generate: USER_LOAD
 * important:
 * 		__{type}__ , this will generate three action types, for example:
 * 	    user.__LOAD__, will generate: USER_LOAD_REQUEST, USER_LOAD_SUCCESS, USER_LOAD_FAILURE
 */

const types = {
	root: [ 'RESET' ],
	login: ['__SUBMIT__'],
	register: ['__SUBMIT__'],
	list: [ 'LIST_LOADED', 'LIST_ERROR' ],
	form: [ '__SAVE__' ],
	widgets: ['__LOAD__']
};

const o = {};
for(const type in types) {
	o[type] = {};
	const items = types[type];
	for(let item of items) {
		item = item.toUpperCase();
		if(item.startsWith('__') && item.endsWith('__')) {
			item = item.substring(2, item.length - 2);
			o[type][item + '_REQUEST'] = type.toUpperCase() + '_' + item + '_REQUEST';
			o[type][item + '_SUCCESS'] = type.toUpperCase() + '_' + item + '_SUCCESS';
			o[type][item + '_FAILURE'] = type.toUpperCase() + '_' + item + '_FAILURE';
		} else {
			o[type][item] = type.toUpperCase() + '_' + item;
		}
	}
}

for(const item in o) {
	exports[item] = o[item];
}
