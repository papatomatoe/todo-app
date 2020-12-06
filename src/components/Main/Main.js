import React from 'react';

import TaskList from '../TaskList/TaskList.js';
import CreateTask from '../CreateTask/CreateTask.js';

const Main = () => {
  return (
    <main className="content container">
      <h1 className="visually-hidden">ToDo Application</h1>
      <TaskList />
      <CreateTask />
    </main>
  );
}

export default Main;
