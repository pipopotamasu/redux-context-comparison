import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const initialUserState = {
  id: 1,
  name: 'test name',
  role: 'admin'
};

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

const reducers = combineReducers({
  user: userReducer,
  // posts: posts,
});

const store = createStore(reducers);

export default function ReduxExample () {
  return (
    <Provider store={store}>
      Redux
    </Provider>
  )
}
