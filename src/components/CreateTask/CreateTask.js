import React from 'react';

const CreateTask = () => {
  return (
    <section className="add-task">
      <h2 className="visually-hidden">Create tasks</h2>
      <form className="add-task__form" method="POST" action="#">
        <div className="add-task__wrapper">
          <input type="text" className="add-task__input" placeholder="input task name..." minLength="1" maxLength="100"
            required />
          <button className="add-task__important" type="button" aria-label="make important"></button>
        </div>
        <button className="add-task__btn" type="button">Add Task</button>
      </form>
    </section>
  )
};

export default CreateTask;
