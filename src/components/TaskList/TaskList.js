import React from 'react';

import Task from '../Task/Task.js';

const TaskList = (props) => {
  const { tasks, toggleTaskPropChange, deleteTask } = props;

  return (
    <section className="tasks">
      <h2 className="visually-hidden">Tasks list</h2>
      <ul className="tasks__list">
        {
          tasks.length ? tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              isImportant={task.isImportant}
              done={task.done}
              toggleTaskPropChange={toggleTaskPropChange}
              deleteTask={deleteTask}
            />)
          ) : null
        }
      </ul>
    </section>
  );
}

export default TaskList;
