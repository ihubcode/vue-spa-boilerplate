<template>
	<div class="form-view">
		<form>
			<div class="item">
				<label>Email</label>
				<div class="control email hint--right hint--rounded" aria-label="">
					<input class="field" name="email" placeholder="Email" value="{{ userinfo.email }}" readonly />
				</div>
			</div>
			<div class="item">
				<label>Nickname</label>
				<div class="control nickname hint--right hint--rounded" aria-label="">
					<input class="field" name="nickname" @focus="onFocus($event)" @blur="onBlur('.nickname')"/>
				</div>
			</div>
			<div class="item">
				<label>Address</label>
				<div class="control address hint--right hint--rounded" aria-label="">
					<input class="field" name="address" @focus="onFocus($event)" @blur="onBlur('.address')"/>
				</div>
			</div>
			<div @click="onSave" :class="['button','sm-button','button-blue','item', { 'button-disabled': isLoading }]">
				<span class="spinner-circle iconfont icon-loading" v-show="isLoading"></span>&nbsp;Save&nbsp;
			</div>
		</form>
	</div>
</template>

<script type="text/ecmascript-6">
	import { root, form } from '../store/types';
	import { save } from '../store/actions/form';
	import { is } from '../utils/index';

	module.exports = {
		components: {

		},

		vuex: {
			getters: {
				error: ({form}) => form.error,
				isLoading: ({form}) => form.isLoading,
				userinfo: ({form}) => form.userinfo,
				saveResp: ({form}) => form.saveResp
			},
			actions: {
				reset: ({dispatch}) => dispatch(root.RESET),
				save
			}
		},

		attached() {

		},

		detached() {
			this.reset();
		},

		watch: {
			error(err) {
				if(err) {
					window.$refs.toast.error(err.message);
				}
			},
			saveResp(val) {
				if(val) {
					window.$refs.alert.success('save success');
				}
			}
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
				query = query || ['.nickname', '.address'];
				if(is.string(query)) {
					query = [query];
				}

				const $el = $(this.$el);
				const errors = [];
				for(const q of query) {
					// field value
					const value = $el.find(q).find('input, select').val();
					// remove error class
					$el.find(q).find('input,select').removeClass('error');
					switch (q) {
						case '.nickname': {
							if(is.empty(value)) {
								errors.push({ $el: $el.find(q), message: 'please input nickname' });
								break;
							}
							break;
						}
						case '.address': {
							if(is.empty(value)) {
								errors.push({ $el: $el.find(q), message: 'please input address' });
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

			onSave() {
				if(this.checked()) {
					this.save();
				}
			}
		}
	};
</script>

<style lang="stylus">
	@import "../styles/form.styl";
</style>
