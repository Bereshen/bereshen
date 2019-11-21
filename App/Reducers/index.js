import { combineReducers } from 'redux';

import { reducer as campaigns } from './Campaigns';


const appReducer = combineReducers({
  campaigns,
});


const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    // reset some state here;
  }
  return appReducer(state, action);
};


export default rootReducer;
