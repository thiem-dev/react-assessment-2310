import {useContext} from 'react'
import TaskItem from './TaskItem'
import TasksContext from '../context/TasksContext'


const Tasks = () => {

    const {tasks} = useContext(TasksContext)

    return tasks.map((task, index) => (
        <TaskItem task={task} key={index} />
    ))
}

export default Tasks 