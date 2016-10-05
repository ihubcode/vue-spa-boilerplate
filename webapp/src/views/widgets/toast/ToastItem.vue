<template>
	<div class="toast-item"
		 @mouseover="_stopTimer"
		 @mouseleave="_startTimer"
		 :class="[theme]"
		 v-show="isShow"
		 transition="toast">
		<div class="toast-message">
			<span v-html="message"></span>
			<span class="toast-close"
				  v-if="options.showClose"
				  @click="remove">
			</span>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	const defaultOptions = {
		theme: 'default', // info warning error success
		duration: 2800,
		showClose: false
	};

	export default {
		props: {
			message: {
				required: true
			},
			position: {
				type: Number,
				required: true
			},
			destroyed: {
				twoWay: true,
				type: Boolean,
				required: true
			},
			options: {
				type: Object,
				coerce(options) {
					return Object.assign({}, defaultOptions, options);
				}
			}
		},

		data() {
			return {
				isShow: false
			};
		},

		computed: {
			theme() {
				return '_' + this.options.theme;
			}
		},

		ready() {
			setTimeout(() => {
				this.isShow = true;
			}, 50);

			if (!this.options.showClose) {
				this._startLazyAutoDestroy();
			}
		},

		detached() {
			clearTimeout(this.timerDestroy);
		},

		methods: {
			// Public
			remove() {
				this._clearTimer();
				this.$remove().$destroy();
				return this;
			},

			// Private
			_startLazyAutoDestroy() {
				this._clearTimer();
				this.timerDestroy = setTimeout(() => {
					this.$remove().$destroy();
				}, this.options.duration);
			},

			_clearTimer() {
				if (this.timerDestroy) {
					clearTimeout(this.timerDestroy);
				}
				this.timerDestroy = null;
			},

			_startTimer() {
				if (!this.options.showClose) {
					this._startLazyAutoDestroy();
				}
			},

			_stopTimer() {
				if (!this.options.showClose) {
					this._clearTimer();
				}
			}
		}
	};
</script>
