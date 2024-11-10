import React, { useContext, useState } from 'react'
import { filterButtonsData } from '../../constants/data';
import TodoContext from '../../context/TodoContext';
import { useDebounce } from '../../hooks/useDebounce';
import { todoListHeading } from '../../constants/constants';
import './style.css';

interface TodoHeaderInterface {
  filterApplied: string;
  searchedTask: string;
  handleChangeFilterApplied: (filterName: string) => void;
  handleSearchedTaskChange: (taskText: string) => void;
}

const TodoHeader: React.FC<TodoHeaderInterface> = ({
  filterApplied,
  searchedTask,
  handleChangeFilterApplied,
  handleSearchedTaskChange
}) => {
  const {handleSearchTaskChange} = useContext(TodoContext);

  const handleTaskInputValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleSearchedTaskChange(e.target.value);
    debouncedSearchTask(e.target.value);
  };

  const debouncedSearchTask = useDebounce(handleSearchTaskChange, 300);

  const filterButtons = () => {
    return (
      <div className='filterButtons'>
        {filterButtonsData.map((button) => (
          <button
            key={button.id}
            className={`filterButton ${
              filterApplied === button.name && 'activeFilterButton'
            }`}
            onClick={() => handleChangeFilterApplied(button.name)}
          >
            {button.name}
          </button>
        ))}
      </div>
    );
  };

  return (
    <header className='todoHeader'>
      <h2>{todoListHeading}</h2>
      <input
        value={searchedTask}
        onChange={handleTaskInputValueChange}
        type='text'
        placeholder='Search'
        className='todoInput'
      />
      {filterButtons()}
    </header>
  );
};

export default TodoHeader