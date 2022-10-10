import React, {useState } from 'react'
import axios from 'axios'
import Todolist from './Todolist';
import './App.css'


const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const changeHandler = e => {
    setTask(e.target.value)
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/user',task)
    const newTodos = [...todos,{name:task,completed:false}]
    setTodos(newTodos)
    setTask("");
  }
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  }


  return (
    <div>
      <center>

        <div className='card'>
          <div className='card-body'>
            <h1 className='text-danger'>Todo  web App</h1>
            <br />

            <form onSubmit={submitHandler}>
              <input type='text' name='task' value={task} onChange={changeHandler} /> &nbsp;
              <input type='submit' value='Add' name='add' />
            </form>

            <br />
            <Todolist lists={todos} deleteHandler={deleteHandler} />
          </div>
        </div>

      </center>
    </div>
  )
}

export default App
