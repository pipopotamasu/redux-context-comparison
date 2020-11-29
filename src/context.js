import { createContext } from 'react';

export const initialState = {
  user: { id: 1, name: 'test name' },
  posts: [{ id: 1, title: 'test post' }]
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        user: {
          id: state.user.id,
          name: action.payload
        }
      };
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    default:
      return state;
  }
}

export const Context = createContext(initialState);
