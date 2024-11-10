import React, { createContext } from "react";
import { taskType } from "../types/taskTypes";

interface TodoContextType {
  taskList: taskType[];
  addTask: (taskText: string) => void;
  markTaskComplete: (taskID: string) => void;
  deleteTask: (taskID: string) => void;
  searchedTaskList?: taskType[];
  handleSearchTaskChange?: (taskText: string) => void;
}

const TodoContext = createContext<TodoContextType>({
    taskList: [],
    addTask: () => {},
    markTaskComplete: () => {},
    deleteTask: () => {},
    searchedTaskList: [],
    handleSearchTaskChange: () => {}
});

export default TodoContext;