<template>
	<div class="fullscreen user-login-view">
		<form class="center-form">
			<h3 class="title">Login</h3>
			<div class="email control hint--right hint--rounded" aria-label="">
				<input type="text" placeholder="Email"
					   class="field" @focus="onFocus($event)" @blur="onBlur('.email')"/>
			</div>
			<div class="passwd control hint--right hint--rounded" aria-label="">
				<input placeholder="Password"
					   class="field" @focus="onFocus($event)" @blur="onBlur('.passwd')" type="password"/>
			</div>
			<div class="button button-blue button-login" @click="onSubmit">Login</div>
			<div class="tip">
				No Account？
				<a v-link="{ path: '/register', query: {referer:$route.query.referer } }">Register</a>
			</div>
		</form>
	</div>
</template>

<script type="text/ecmascript-6">
	import { root } from '../action-types';
	import utils from '../utils/utils';

	export default {
		components: {

		},
		vuex: {
			getters: {
				error: ({login}) => login.error
			},
			actions: {
				reset: ({dispatch}) => dispatch(root.RESET)
			}
		},

		attached() {
//			console.log(this.$route.query);
		},

		detached() {
			this.reset();
			const $el = $(this.$el);
			$el.find('.center-form input').val('').removeClass('error');
			$el.find('.center-form .control').attr('aria-label', '');
			$el.find('.center-form').show();
			$el.find('.success-tip').hide();
		},

		watch: {

		},

		methods: {
			/**
			 * on focus event
			 */
			onFocus(event) {
				const $el = $(event.target);
				// remove error class
				$el.removeClass('error');
				// hide tooltip
				$el.parent('.control').attr('aria-label', '');
			},

			/**
			 * on blur event
			 */
			onBlur(query) {
				this.checked(query);
			},

			/**
			 * validate form
			 */
			checked(query) {
				query = query || ['.email', '.passwd'];
				if(utils.is.string(query)) {
					query = [query];
				}

				const $el = $(this.$el);
				const errors = [];
				for(const q of query) {
					// field value
					const value = $el.find(q).find('input,select').val();
					// remove error class
					$el.find(q).find('input,select').removeClass('error');
					switch (q) {
						case '.email': {
							if(utils.is.empty(value)) {
								errors.push({ $el: $el.find(q), message: 'Please input email' });
								break;
							}
							if(!utils.is.email(value)) {
								errors.push({ $el: $el.find(q), message: 'email not correct' });
								break;
							}
							break;
						}
						case '.passwd': {
							if(utils.is.empty(value)) {
								errors.push({ $el: $el.find(q), message: 'Please input password' });
								break;
							}
							if(value.length < 6 || value.length > 16) {
								errors.push({ $el: $el.find(q), message: 'password len 6~16' });
								break;
							}
							break;
						}
					}
				}

				if(errors.length === 0) {
					return true;
				}

				for(const error of errors) {
					error.$el.find('input,select').addClass('error');
					// shake
					error.$el.velocity('callout.shake', 380);
					// show tooltip
					error.$el.attr('aria-label', error.message);
				}
				return false;
			},

			/***
			 * on submit
			 */
			onSubmit() {
				if(!this.checked()) {
					return;
				}
				window.router.go('/');
			}
		}
	};
</script>
