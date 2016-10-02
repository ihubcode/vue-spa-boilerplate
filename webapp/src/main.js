import store from './store';
import router from './router';
import App from './views/app';
import extend from './utils/extension';

// globle variables
window.router = router;
window.userinfo = null;
window.$refs = {};

// extend some methods
extend();

// start app with single store
router.start({
	store,
	components: {App}
}, 'body');
