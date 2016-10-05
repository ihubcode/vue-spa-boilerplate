<template>
	<section class="app-sidebar">
		<img class="logo" src="/static/images/logo.png"/>
		<ul class="sidebar">
			<li>
				<a v-link="{  path: '/list'}">
					<i class="iconfont icon-project"></i>List
				</a>
			</li>
			<li>
				<a v-link="{ path: '/form'}">
					<i class="iconfont icon-pay"></i>Form
				</a>
			</li>
			<li>
				<a v-link="{ path: '/widgets'}">
					<i class="iconfont icon-data"></i>Widgets
				</a>
			</li>
			<li>
				<a v-link="{ path: '/login'}">
					<i class="iconfont icon-exit"></i>Logout
				</a>
			</li>
		</ul>
	</section>
</template>
