const counterReducer = (state, action) => {
	switch (action.type) {
		case '@counter/incremented':
			return {
				count: state.count + 1,
			};
		case '@counter/decremented':
			return {
				count: state.count - 1,
			};
		case '@counter/reseted':
			return {
				count: 0,
			};
		default:
			return state;
	}
};

export default counterReducer;
