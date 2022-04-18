import './App.css';
import React from 'react';
import Todos from './components/Todos';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id='heading'>My Todo List</h1>
        <TodoInput />
        <Todos />
      </header>
    </div>
  );
}

export default App;
