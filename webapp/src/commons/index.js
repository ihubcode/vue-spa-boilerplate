
const orderStatus = {
	0: 'Unpaid',
	1: 'Success',
	2: 'Refunded',
	3: 'Failed'
};

/**
 * get order status label
 */
export const getOrderStatusLabel = (status) => {
	let label = '';
	switch (status) {
		case 0: { // not pay
			label = '<div class="label label-yellow">' + orderStatus[status] + '</div>';
			break;
		}
		case 1: { // Success
			label = '<div class="label label-green">' + orderStatus[status] + '</div>';
			break;
		}
		case 2: { // Failed
			label = '<div class="label label-blue">' + orderStatus[status] + '</div>';
			break;
		}
		case 3: { // Refund
			label = '<div class="label label-red">' + orderStatus[status] + '</div>';
			break;
		}
	}
	return label;
};
