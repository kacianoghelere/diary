import { combineReducers } from 'redux';

import { GET_NOTES } from '../actions';

const INITIAL_STATE = {

};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NOTES:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ notes: notesReducer });