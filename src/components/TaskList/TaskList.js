import React from 'react';

import Task from '../Task/Task.js';

const TaskList = () => {
  return (
    <section className="tasks">
      <h2 className="visually-hidden">Tasks list</h2>
      <ul className="tasks__list">
        <Task title={'Drink Coffee'} isImportant={false} />
        <Task title={'Read Book'} isImportant={false} />
        <Task title={'Create React App'} isImportant={true} />
      </ul>
    </section>
  );
}

export default TaskList;
