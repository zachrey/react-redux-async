import {combineReducers} from 'redux';
import {TOGGLE_GET, SUCCESS_GET, FAILED_GET} from '../actions/actions';

function isFetchData(state=false, action) {
  switch (action.type){
    case TOGGLE_GET:
      return !state;
    default:
      return state;
  }
}

function profile(state={}, action) {
  switch (action.type){
    case SUCCESS_GET:
      return action.profile;
    default:
      return state;
  }
}


const reducer = combineReducers({
  isFetchData,
  profile
});

export default reducer;