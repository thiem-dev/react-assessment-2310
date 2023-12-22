import {useState} from 'react'
import Tasks from './components/Tasks'
import {TasksProvider} from './context/TasksContext'

import TaskInput from './components/TaskInput'

import './App.css';

function App() {


  // const [tasks, setTasks] = useState(['Tasks from app.js', 'one more'])

  // const addTask = (text) => {
  //   setTasks([text, ...tasks])
  // }

  return (
    <TasksProvider>
      <TaskInput />
      <Tasks />
    </TasksProvider>    
  )
}

export default App;
