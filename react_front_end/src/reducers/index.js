import { combineReducers } from 'redux';
import ResultReducer from './reducer_results';

const rootReducer = combineReducers({
  // give the reducer a name so that it can be
  // referenced in the component for state  
  results: ResultReducer
});
export default rootReducer;