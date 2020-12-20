import React from 'react';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

class App extends React.Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.setState({ tasks });
  }

  componentDidUpdate() {
    const tasks = this.state.tasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  addNewTaskHandler = (title, isImportant) => {
    const tasks = this.state.tasks.slice();
    const id = tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1;

    const newTask =
    {
      id,
      title,
      isImportant,
      done: false,
    };

    tasks.push(newTask);

    this.setState(({ tasks }));
  }

  toggleTaskPropChangeHandler = (id, propsName) => {
    const tasks = this.state.tasks.slice();
    const currentTask = tasks.find(el => el.id === id);

    currentTask[propsName] = !currentTask[propsName];

    this.setState({ tasks });
  }

  deleteTaskHandler = (id) => {
    const tasks = this.state.tasks.slice();

    const currentTaskIdx = tasks.findIndex(el => el.id === id);

    const newTasks = [...tasks.slice(0, currentTaskIdx), ...tasks.slice(currentTaskIdx + 1, tasks.length)]

    this.setState({ tasks: newTasks });
  }

  render() {
    const { tasks } = this.state;

    return (
      <React.Fragment>
        <Header />
        <Main
          tasks={tasks}
          toggleTaskPropChange={this.toggleTaskPropChangeHandler}
          addNewTask={this.addNewTaskHandler}
          deleteTask={this.deleteTaskHandler}
        />
        <Footer currentYear={new Date().getFullYear()} />
      </React.Fragment>
    );
  }
}

export default App;
