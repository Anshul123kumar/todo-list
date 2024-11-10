import React, {useEffect, useState} from "react";
import TodoContext from "./TodoContext";
import { taskType } from "../types/taskTypes";

interface ContextProviderProps {
    children?: React.ReactNode;
}

const TodoProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const persistedTaskList = localStorage.getItem('taskList');
    const [taskList, setTaskList] = useState<taskType[]>(persistedTaskList ? JSON.parse(persistedTaskList) : []);
    const [searchedTaskList, setSearchedTaskList] = useState<taskType[]>(taskList);

    useEffect(() => {
        localStorage.removeItem('taskList');
        localStorage.setItem('taskList', JSON.stringify(taskList));
        setSearchedTaskList(taskList);
    }, [taskList]);

    const addTask = (taskText: string) => {
        const taskToAdd = {task: taskText, taskID: Math.random().toString(), isCompleted: false};
        setTaskList((prev) => [...prev, taskToAdd]);
    }

    const markTaskComplete = (taskID: string) => {
        const taskIndex = taskList.findIndex((task) => task.taskID === taskID);
        const updatedTaskList = [
          ...taskList.slice(0, taskIndex),
          { ...taskList[taskIndex], isCompleted: !taskList[taskIndex].isCompleted },
          ...taskList.slice(taskIndex + 1)
        ];
        setTaskList(updatedTaskList);
    }  

    const deleteTask = (taskID: string) => {
      setTaskList(taskList.filter((task) => task.taskID !== taskID));
    }
  

    const handleSearchTaskChange = (taskText: string) => {
        const searchedTaskList = taskList.filter((task) =>
          task.task.toLowerCase().includes(taskText.toLowerCase())
        );
        setSearchedTaskList(searchedTaskList);
    }

    return (
      <TodoContext.Provider
        value={{ taskList, addTask, markTaskComplete, deleteTask, searchedTaskList, handleSearchTaskChange }}
      >
        {children}
      </TodoContext.Provider>
    );
}

export default TodoProvider;