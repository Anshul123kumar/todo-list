import React, { useState } from 'react';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import AddTodoTask from '../components/AddTodoTask';
import './TodoScreen.css';

const TodoScreen = () => {
  const [filterApplied, setFilterApplied] = useState<string>("");
  const [searchedTask, setSearchedTask] = useState<string>("");
  const handleChangeFilterApplied = (filterName: string) => {
    setFilterApplied(filterName);
  }
  const handleSearchTaskChange = (taskText: string) => {
    setSearchedTask(taskText);
  }
  
  return (
    <div className='app-container'>
      <div className='app-content'>
      <TodoHeader
        filterApplied={filterApplied}
        searchedTask={searchedTask}
        handleChangeFilterApplied={handleChangeFilterApplied}
        handleSearchedTaskChange={handleSearchTaskChange}
      />
      <TodoList filterApplied={filterApplied} searchedTask={searchedTask} />
      <AddTodoTask />
      </div>
    </div>
  );
}

export default TodoScreen