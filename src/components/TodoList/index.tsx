import React, { useContext, useEffect } from 'react';
import TodoContext from '../../context/TodoContext';
import { deleteButtonText } from '../../constants/constants';
import './style.css';

interface TodoListInterface {
  filterApplied: string;
  searchedTask: string;
}

const TodoList: React.FC<TodoListInterface> = ({
  filterApplied = '',
  searchedTask = ''
}) => {
  const { taskList, markTaskComplete, deleteTask, searchedTaskList } = useContext(TodoContext);

  const filteredTaskList = searchedTaskList?.filter((task) => {
    let result = true;
    switch (filterApplied) {
      case 'InComplete':
        result = !task.isCompleted;
        break;
      case 'Completed':
        result = task.isCompleted;
        break;
      default:
        break;
    }
    return result;
  });

  return (
    <div className='todoListContainer'>
      {filteredTaskList?.map((todoItem) => {
        return (
          <div
            key={todoItem.taskID}
            className={`todoListItem ${
              todoItem.isCompleted && 'completedTodoListItem'
            }`}
          >
            <div className='todoListTask'>
              <input
                type='checkbox'
                className='checkbox'
                onChange={() => markTaskComplete(todoItem.taskID)}
                checked={todoItem.isCompleted}
              />
              <p className='todoItemText'>{todoItem.task}</p>
            </div>
            <button onClick={() => deleteTask(todoItem.taskID)}>
              {deleteButtonText}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList