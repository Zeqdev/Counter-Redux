import { Provider } from 'react-redux';
import store from '../state/store';
import Counter from './Counter';

export function App() {
	return (
		<Provider store={store}>
			<Counter />
		</Provider>
	);
}
