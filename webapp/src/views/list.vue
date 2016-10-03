<template>
	<div class="order-view">
		<div class="header"></div>
		<infinite v-ref:infinite url="/static/assets/list.json" :on-load-success="onLoadSuccess" :on-load-failure="onLoadFailure">
			<table slot="content" class="orders" cellspacing="0" cellpadding="0">
				<thead>
					<tr>
						<th width="250px">Order Number</th>
						<th>Title</th>
						<th width="140px">Cost($)</th>
						<th width="140px">Status</th>
						<th width="140px">Time</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in items" track-by="_id">
						<td>{{ item._id }}</td>
						<td>{{ item.title }}</td>
						<td>￥{{ item.amount }}</td>
						<td>{{{ item.statusLabel }}}</td>
						<td>{{ item.createdAt }}</td>
					</tr>
				</tbody>
			</table>
		</infinite>

	</div>
</template>

<script type="text/ecmascript-6">
	import { root,list } from '../action-types';
	import Infinite from './widgets/infinite.vue';

	export default {
		components: {
			Infinite
		},

		vuex: {
			getters: {
				error: ({list}) => list.error,
				items: ({list}) => list.items
			},
			actions: {
				reset: ({dispatch}) => dispatch(root.RESET),
				setupError: ({dispatch}, error) => dispatch(list.LIST_ERROR, error),
				setupData: ({dispatch}, data) => dispatch(list.LIST_LOADED, data)
			}
		},

		attached() {
			this.$refs.infinite.refresh();
		},

		detached() {
			this.reset();
		},

		watch: {
			error(err) {
				if(err) {
					window.$refs.toast.error(err.message);
				}
			}
		},

		methods: {
			onLoadSuccess(data) {
				this.setupData(data);
			},
			onLoadFailure(data) {
				this.setupError(data);
			}
		}

	};
</script>

<style lang="stylus">
	@import "../styles/list.styl";
</style>
