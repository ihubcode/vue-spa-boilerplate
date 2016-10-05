<template>
	<div id="home">
		 <!--<app-header></app-header>-->
		<app-sidebar></app-sidebar>
		<!-- main view -->
		<div class="app-content">
			<router-view
				class="view"
				keep-alive
				transition="fade"
				transition-mode="out-in">
			</router-view>
		</div>
		<!--<app-footer></app-footer>-->
	</div>
</template>

<script>
	import AppHeader from './components/AppHeader.vue';
	import AppFooter from './components/AppFooter.vue';
	import AppSidebar from './components/AppSidebar.vue';

	export default {
		name: 'Home',
		components: {
			AppHeader,
			AppFooter,
			AppSidebar
		}
	};
</script>
