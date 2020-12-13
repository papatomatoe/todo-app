import React from 'react';

import Task from '../Task/Task.js';

const TaskList = (props) => {
  const { tasks } = props;
  return (
    <section className="tasks">
      <h2 className="visually-hidden">Tasks list</h2>
      <ul className="tasks__list">
        {
          tasks.map(task => <Task key={task.id} title={task.title} isImportant={task.isImportant} done={task.done} />)
        }
      </ul>
    </section>
  );
}

export default TaskList;
