const initialCountState = {
	count: 0
};

function counter(state = initialCountState, action) {
	switch (action.type) {
		case 'increase':
			return { count: state.count + 1 };
		default:
			return state;
	}
}

export default counter;
