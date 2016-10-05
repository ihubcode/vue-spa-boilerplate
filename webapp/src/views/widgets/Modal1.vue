<template>
	<div class="modal-overlay" @click="onClickOverlay()">
		<div class="popup-modal" @click="onClickModal($event)">
			<div class="inner">
				<h3 v-show="hasTitle" class="title">{{ title }}</h3>
				<slot name="content"></slot>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		/***
		 * props:
		 * 	   title:
		 *           说明: 标题
		 *           default: ''
		 *     content:
		 *           说明: 正文
		 *           default: ''
		 *     dismissOnMask:
		 *     		说明: 当点击modal外时,隐藏modal
		 *     		default: false
		 */
		props: {
			content: String,
			title: String,
			dismissOnMask: {
				type: Boolean,
				default: false
			}
		},

		computed: {
			hasTitle() {
				return !!this.title;
			}
		},

		methods: {
			/**
			 * show modal
			 */
			__show(callback) {
				const top = $('body').scrollTop();
				$('html').css('overflow-y', 'hidden');

//				const $header = $('.app-header');
//				const $sidebar = $('.app-sidebar');
				const $modal = $(this.$el).find('.popup-modal');
				const $el = $(this.$el);
				//noinspection JSValidateTypes
				$el.css({
					display: 'block',
					top: top,
					left: 0,
					height: $(window).height(),
					width: $(window).width()
				});
				$el.velocity('fadeIn', 120, () => {
					//noinspection JSValidateTypes
					$modal.css({marginTop: -$modal.height() / 2});
					$modal.velocity('transition.slideDownIn', 280, () => {
						if(callback) {
							callback();
						}
					});
				});
			},

			/**
			 * alert
			 */
			show (options) {
				options = options || {};
				for (const option in this.$data) {
					if (this.$data.hasOwnProperty(option)) {
						if (options[option] !== undefined) {
							this.$data[option] = options[option];
						}
					}
				}
				// show
				this.__show(options.callback);
			},

			/***
			 * dismiss
			 * */
			dismiss(callback) {
				const $modal = $(this.$el).find('.popup-modal');

				$modal.velocity('transition.slideUpOut', {
					duration: 280,
					complete: () => {
						$(this.$el).velocity('fadeOut', 120, () => {
							$('html').css('overflow-y', 'auto');
						});
						if (callback) {
							callback();
						}
					}
				});
			},

			/**
			 * destroy
			 **/
			destroy() {
				this.dismiss(() => {
					$(this.$el).remove();
				});
			},

			/**
			 * on click overlay
			 */
			onClickOverlay() {
				if(this.dismissOnMask) {
					this.dismiss();
				}
			},

			/**
			 * on click modal
			 */
			onClickModal(event) {
				event.preventDefault();
				event.stopPropagation();
			}
		}
	};
</script>
