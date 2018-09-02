import axios from 'axios';
import {
  GET_CONTACTS,
  GET_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT
} from './types';

export const getContacts = () => async dispatch => {
  const res = await axios.get('http://142.93.105.156:8000/users');

  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const getContact = id => async dispatch => {
  const res = await axios.get(`http://142.93.105.156:8000/users/${id}`);

  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const addContact = contact => async dispatch => {
  const res = await axios.post('http://142.93.105.156:8000/users', contact);

  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const editContact = contact => async dispatch => {
  const res = await axios.put(
    `http://142.93.105.156:8000/users/${contact.id}`,
    contact
  );

  dispatch({
    type: EDIT_CONTACT,
    payload: res.data
  });
};

export const deleteContact = id => async dispatch => {
  await axios.delete(`http://142.93.105.156:8000/users/${id}`);

  dispatch({
    type: DELETE_CONTACT,
    payload: id
  });
};
