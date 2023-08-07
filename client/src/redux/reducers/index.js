import { combineReducers } from 'redux';
import jobPostReducer from './jobPostReducer';

const rootReducer = combineReducers({
  jobPost: jobPostReducer,
  // Add more reducers here if needed
});

export default rootReducer;
