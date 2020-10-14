import {combineReducers} from 'redux';
import filters from './filters';
import watch from './watch';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  watch,
  cart
});

export default rootReducer;