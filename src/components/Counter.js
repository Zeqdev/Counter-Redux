import { actionIncremented, actionDecremented, actionReseted } from '../state/actions';
import { connect } from 'react-redux';

const Counter = ({ count, incrementCount, decrementCount, resetCount }) => {
	return (
		<div className='container'>
			<h1 className='title'>Counter</h1>
			<div className='counter'>{count}</div>
			<div className='buttons'>
				<button className='increment' onClick={incrementCount}>
					Increment
				</button>
				<button className='decrement' onClick={decrementCount}>
					Decrement
				</button>
				<button className='reset' onClick={resetCount}>
					Reset
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	count: state.count,
});

const mapDispatchToProps = dispatch => ({
	incrementCount: () => dispatch(actionIncremented),
	decrementCount: () => dispatch(actionDecremented),
	resetCount: () => dispatch(actionReseted),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
