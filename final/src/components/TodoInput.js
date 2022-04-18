import React, {useState} from "react";
import { useDispatch } from 'react-redux';


function TodoInput(){
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState();
    const handleChange = event => setNewTodo(event.target.value);
    const handleClick = () => dispatch({
      type: "ADD_TODO",
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
        completed: false
      }
    })
    return (
      <div>
      <input 
        className='form-control mb-2 mr-sm-2' 
        value={newTodo} 
        onChange={handleChange} 
        placeholder='Add todo...'
        type="text" /> 
      <button className='btn btn-primary mb-2' onClick={handleClick}> ADD </button>
      </div>
    )
  }

  export default TodoInput