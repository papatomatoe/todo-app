import React from 'react';

import TaskList from '../TaskList/TaskList.js';
import CreateTask from '../CreateTask/CreateTask.js';

const Main = (props) => {
  const { tasks, addNewTask } = props;
  return (
    <main className="content container">
      <h1 className="visually-hidden">ToDo Application</h1>
      <TaskList tasks={tasks} />
      <CreateTask addNewTask={addNewTask} />
    </main>
  );
}

export default Main;
