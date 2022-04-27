import { createStore } from 'redux';
import counterReducer from './reducer';

export default createStore(counterReducer, { count: 0 });
