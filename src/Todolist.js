import React from 'react'


const Todolist = ({lists,deleteHandler}) => {
  const completedTask = (ind)=>{
lists[ind].completed=true;

  }
  
  return (
    <div>
      {lists.map((todo,index)=>
      <div key={index}>
       {todo.completed && <i className="bi bi-check-circle"></i>} <h5>{todo.name} &nbsp;<button onClick={() => deleteHandler(index)}>Delete</button> &nbsp;<button onClick={()=>completedTask(index)}>Completed</button></h5>
      </div>)}
     
    </div>
  )
}

export default Todolist
