import React from 'react';

import TaskList from '../TaskList/TaskList.js';
import CreateTask from '../CreateTask/CreateTask.js';

const Main = (props) => {
  const { tasks, addNewTask, toggleTaskPropChange, deleteTask } = props;
  return (
    <main className="content container">
      <h1 className="visually-hidden">ToDo Application</h1>
      <TaskList
        tasks={tasks}
        toggleTaskPropChange={toggleTaskPropChange}
        deleteTask={deleteTask}
      />
      <CreateTask addNewTask={addNewTask} />
    </main>
  );
}

export default Main;
