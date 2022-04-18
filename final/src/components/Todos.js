import React from "react";
import { useDispatch, useSelector } from 'react-redux';


function Todos(){
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos);

  function handleClick(id){
      dispatch({
      type: "DELETE_TODO",
      payload: id,
    })
  }


  
  return (
    <div>
        {todos.map(todo => 
        <div className="element">
            <div>
                <span>{todo.label} </span>
                <button id="btn" className='btn btn-primary' onClick={() => handleClick(todo.id)}>Completed</button> 
             </div>    
        </div>
        )}
    </div>
  )
}


export default Todos