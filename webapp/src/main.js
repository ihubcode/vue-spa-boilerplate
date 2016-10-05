//import 'babel-polyfill';

import store from './store';
import router from './router';
import App from './views/App';
import extension from './utils/extension';

// globle variables
window.router = router;
window.userinfo = null;
window.$refs = {};

// extend some methods
extension();

// start app with single store
router.start({
	store,
	components: {App}
}, 'body');
