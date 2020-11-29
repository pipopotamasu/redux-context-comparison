import { useContext, useReducer } from 'react';
import { initialState, reducer, Context } from '../context';
import classes from './page.module.css';

function UserInfo () {
  console.log('UserInfo is updated!');
  const { user, dispatch } = useContext(Context);

  return (
    <div className={classes.userContainer}>
      <p>{user.name}</p>
      <button
        onClick={() => dispatch({ type: 'UPDATE_NAME', payload: 'updated name' })}
      >
        update user
      </button>
    </div>
  )
}

function PostList () {
  console.log('PostList is updated!');
  const { posts, dispatch } = useContext(Context);

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

export default function ContextExample () {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ user: state.user, posts: state.posts, dispatch }}>
      <h1>Context</h1>
      <UserInfo />
      <PostList />
    </Context.Provider>
  )
}
