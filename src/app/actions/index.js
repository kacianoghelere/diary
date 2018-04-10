import { database } from '../../firebase';

export const GET_NOTES = 'GET_NOTES';

export const getNotes = () => (dispatch) => {
  database.on('value', (snapshot) => dispatch({
    type: GET_NOTES,
    payload: snapshot.val()
  }));
};

export const ADD_NOTE = 'ADD_NOTE';

export const addNote = (note) => (dispatch) => {
  return dispatch({
    type: ADD_NOTE,
    payload: database.push(note)
  });
};

export const DELETE_NOTE = 'DELETE_NOTE';

export const deleteNote = (id) => (dispatch) => {
  return dispatch({
    type: DELETE_NOTE,
    payload: database.child(id).remove()
  });
};