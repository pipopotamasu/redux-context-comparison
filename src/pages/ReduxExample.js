import { Provider, useSelector } from 'react-redux';
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

const store = createStore(reducers);

function UserInfo () {
  console.log('UserInfo is updated!');
  const user = useSelector(state => state.user);

  return (
    <>
      <p>{user.name}</p>
    </>
  )
}

function PostList () {
  console.log('PostList is updated!');
  const posts = useSelector(state => state.posts);

  return (
    <ul>
      {
        posts.map(post => <li key={post.id}>{post.title}</li>)
      }
    </ul>
  )
}

export default function ReduxExample () {
  return (
    <Provider store={store}>
      <h1>Redux</h1>
      <UserInfo />
      <PostList />
    </Provider>
  )
}
