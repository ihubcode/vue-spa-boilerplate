<template>
	<div id="app">
		<router-view
			class="app"
			keep-alive
			transition="fade"
			transition-mode="out-in">
		</router-view>

		<alert v-ref:alert></alert>
		<confirm v-ref:confirm></confirm>
		<toast v-ref:toast></toast>
	</div>
</template>

<script type="text/ecmascript-6">
	import Alert from './widgets/alert.vue';
	import Confirm from './widgets/confirm.vue';
	import Toast from './widgets/toast/toast.vue';

	export default {
		components: {
			Alert,
			Confirm,
			Toast
		},

		attached() {
			window.$refs.alert = this.$refs.alert;
			window.$refs.confirm = this.$refs.confirm;
			window.$refs.toast = this.$refs.toast;
		},

		detached() {

		}
	};
</script>

<style lang="stylus">
	@import "/static/fonts/iconfont.css";
	@import "../styles/base/_inc.styl";
	@import "../styles/foundations/_inc.styl";
	@import "../styles/widgets/_inc.styl";
	@import "../styles/components/layout.styl";
</style>
