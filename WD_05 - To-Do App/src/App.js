import React from 'react';
import './App.css';
import TodoList from './TodoList';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <div className=''>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
};

export default App;