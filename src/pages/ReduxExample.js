import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from '../reduxStore';
import classes from '../styles/page.module.css';

function UserInfo () {
  console.log('UserInfo is updated!');
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div className={classes.userContainer}>
      <p>{user.name}</p>
      <button
        onClick={() => {
          dispatch({ type: 'UPDATE_NAME', payload: 'updated name' });
        }}
      >
        update user
      </button>
    </div>
  )
}

function PostList () {
  console.log('PostList is updated!');
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  return (
    <div className={classes.postsContainer}>
      <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul>
      <button
        onClick={() =>  {
          dispatch(
            { type: 'ADD_POST', payload: { id: posts.length + 1, title: 'added post' }}
          )
        }}
      >
        add post
      </button>
    </div>
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
