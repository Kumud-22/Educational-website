// index.js (rootReducer)
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  courses: courseReducer,
  // Add other reducers here
});

export default rootReducer;
