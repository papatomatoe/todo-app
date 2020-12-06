import React from 'react';

const Task = (props) => {
  const { title, isImportant } = props;
  return (
    <li className={`tasks__item ${isImportant && 'tasks__item--important'}`}>
      <h3 className="tasks__title">{title}</h3>
      <div className="tasks__btns">
        <button className="task__btn task__btn--important" type="button" aria-label="make important"></button>
        <button className="task__btn task__btn--delete" type="button" aria-label="delete"></button>
      </div>
    </li>
  );
}

export default Task;
