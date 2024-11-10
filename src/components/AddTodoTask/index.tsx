import React, { useContext, useState } from 'react';
import TodoContext from '../../context/TodoContext';
import { addTaskButtonText } from '../../constants/constants';
import './style.css';

const AddTodoTask = () => {
  const [taskValue, setTaskValue] = useState('');
  const { addTask } = useContext(TodoContext);
  const handleTaskValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskValue(e.target.value);
  };
  const handleAddTask = () => {
    !!taskValue && addTask(taskValue);
    setTaskValue('');
  };
  return (
    <div className='addTodoTaskWpr'>
      <input
        type='text'
        placeholder='Type something'
        className='addTodoInput'
        value={taskValue}
        onChange={handleTaskValueChange}
      />
      <div className='addTodoButton' onClick={handleAddTask}>
        <span className='addTodoButtonText'>{addTaskButtonText}</span>
      </div>
    </div>
  );
};

export default AddTodoTask