import Vue from 'vue';
import Router from 'vue-router';

import Index from './views/index.vue';
import Login from './views/user-login.vue';
import Register from './views/user-register.vue';
import List from './views/list.vue';
import Form from './views/form.vue';
import Widgets from './views/widgets.vue';

// install router
Vue.use(Router);

// routing
const router = new Router({
	history: true
//	saveScrollPosition: true
});

router.map({
	'/': {
		component: Index,
		subRoutes: {
			'/': { component: List },
			'/list': { component: List },
			'/form': { component: Form },
			'/widgets': { component: Widgets }
		}
	},

	'/login': { component: Login, auth: 'no' },
	'/register': { component: Register, auth: 'no' }
});

router.redirect({
	'*': '/'
});

//router.beforeEach((transition) => {
//	const auth = transition.to.auth;
//		if (hasLogin) {
//			transition.next();
//			window.scrollTo(0, 0);
//		} else {
//			const redirect = encodeURIComponent(transition.to.path);
//			transition.redirect('/login?redirect=' + redirect);
//		}
//	}
//});

export default router;
