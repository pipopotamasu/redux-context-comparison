import { createContext, useContext, useReducer } from 'react';
import classes from './page.module.css';

const state = {
  user: { id: 1, name: 'test name' },
  posts: [{ id: 1, title: 'test post' }]
}

const Context = createContext(state);

function UserInfo () {
  console.log('UserInfo is updated!');
  const { user } = useContext(Context);

  return (
    <div className={classes.userContainer}>
      <p>{user.name}</p>
      <button>
        update user
      </button>
    </div>
  )
}

export default function ContextExample () {
  return (
    <Context.Provider value={state}>
      <h1>Context</h1>
      <UserInfo />
      {/* <PostList /> */}
    </Context.Provider>
  )
}
