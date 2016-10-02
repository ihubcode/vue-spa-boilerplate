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
	import AppHeader from './components/app-header.vue';
	import AppFooter from './components/app-footer.vue';
	import AppSidebar from './components/app-sidebar.vue';

	export default {
		name: 'Index',
		components: {
			AppHeader,
			AppFooter,
			AppSidebar
		}
	};
</script>
