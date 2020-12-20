import React from 'react';

const Task = (props) => {
  const { id, title, isImportant, done, toggleTaskPropChange, deleteTask } = props;
  return (
    <li className={`tasks__item ${isImportant && 'tasks__item--important'} ${done && 'tasks__item--done'}`}>
      <h3
        className="tasks__title"
        onClick={() => toggleTaskPropChange(id, 'done')}
      >{title}</h3>
      <div className="tasks__btns">
        <button
          className="task__btn task__btn--important"
          type="button"
          aria-label="make important"
          onClick={() => toggleTaskPropChange(id, 'isImportant')}
        ></button>
        <button
          className="task__btn task__btn--delete"
          type="button"
          aria-label="delete"

          onClick={() => deleteTask(id)}
        ></button>
      </div>
    </li>
  );
}

export default Task;
