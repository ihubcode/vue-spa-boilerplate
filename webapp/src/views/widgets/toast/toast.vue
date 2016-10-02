<template>
	<div class="toast" :class="classesOfPosition">
		<toast-item
			v-for="toast in toasts"
			:message="toast.message"
			:options="toast.options"
			:destroyed.sync="toast.isDestroyed"
			:position="$index">
		</toast-item>
	</div>
</template>

<script type="text/ecmascript-6">
	import ToastItem from './toast-item.vue';

	const defaultOptions = {
		maxToasts: 6,
		position: 'right top'

	};

	export default {
		components: {
			'toast-item': ToastItem
		},

		data() {
			return {
				toasts: [],
				options: defaultOptions
			};
		},

		computed: {
			classesOfPosition() {
				return this._updateClassesOfPosition(this.options.position);
			}
		},

		methods: {
			// Public
			info(message, options) {
				this.showToast(message, Object.assign(options = options || {}, { theme: 'info' }));
			},

			success(message, options) {
				this.showToast(message, Object.assign(options = options || {}, { theme: 'success' }));
			},

			warning(message, options) {
				this.showToast(message, Object.assign(options = options || {}, { theme: 'warning' }));
			},

			error(message, options) {
				this.showToast(message, Object.assign(options = options || {}, { theme: 'error' }));
			},

			showToast(message, options) {
				this._addToast(message, options);
				this._moveToast();
				return this;
			},

			setOptions(options) {
				this.options = Object.assign(this.options, options || {});
				return this;
			},

			// Private
			_addToast(message, options = {}) {
				if (!message) {
					return;
				}
				this.toasts.unshift({
					message,
					options,
					isDestroyed: false
				});
			},

			_moveToast() {
				const maxToasts = this.options.maxToasts > 0
					? this.options.maxToasts
					: 9999;

				// moving||removing old toasts
				this.toasts = this.toasts.reduceRight((prev, toast, i) => {
					if (toast.isDestroyed) {
						return prev;
					}

					if (i + 1 >= maxToasts) {
						return prev;
					}

					return [toast].concat(prev);
				}, []);
			},

			_updateClassesOfPosition(position) {
				return position.split(' ').reduce((prev, val) => {
					prev[`p-${val.toLowerCase()}`] = true;
					return prev;
				}, {});
			}
		}
	};
</script>
