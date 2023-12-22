import {createContext, useState} from 'react'

const TasksContext = createContext() 

export const TasksProvider = ({children}) => {

    const [tasks, setTasks] = useState(['task from context.'])


    const addTask = (text) => {
        setTasks([text, ...tasks])
    }

    return <TasksContext.Provider value={{
        tasks,
        addTask
    }}>
        {children}
    </TasksContext.Provider>
}

export default TasksContext