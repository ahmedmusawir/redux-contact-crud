import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  EDIT_CONTACT
} from '../actions/types';

const initialState = {
  contacts: [
    {
      id: '276f78f7-2411-415d-b56f-b966b3e9c232',
      name: 'Moose Man 1',
      email: 'moose@email.com',
      phone: '404.219.1002'
    },
    {
      name: 'Justin Bibo 1',
      email: 'mmmmm@aa.com',
      phone: '365478000',
      id: '356455be-b1e5-452a-b7f8-191f9f321247'
    },
    {
      id: '4b763877-4e1e-4301-9d44-4a270d7ed7ba',
      name: 'Rico Sequentace',
      email: 'rico@email.com',
      phone: '404.123.1234'
    },
    {
      id: 'a3d6cfb1-cf1e-4bdb-9b77-64676d4f365b',
      name: 'Fat Boy 2',
      email: 'fb@email.com',
      phone: '303.123.1234'
    }
  ]
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case EDIT_CONTACT:
      return {
        ...state
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export default contactReducer;
