import { createStore, combineReducers } from 'redux';

const initialUserState = {
  id: 1,
  name: 'test name',
};

const initialPostsState = [
  { id: 1, title: 'test post' },
]

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.payload
      }
    default:
      return state;
  }
}

const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload]
    default:
      return state;
  }
}

const reducers = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

export const store = createStore(reducers);
