import React from 'react';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

class App extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        title: 'Drink Coffee',
        isImportant: false,
        done: false,
      },
      {
        id: 2,
        title: 'Read Book',
        isImportant: false,
        done: true,
      }, {
        id: 7,
        title: 'Create React App',
        isImportant: true,
        done: false,
      }
    ]
  }

  addNewTaskHandler = (title, isImportant) => {
    const tasks = this.state.tasks.slice();
    const id = Math.max(...tasks.map(task => task.id)) + 1;

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

  render() {
    const { tasks } = this.state;

    console.log(tasks)

    return (
      <React.Fragment>
        <Header />
        <Main tasks={tasks} addNewTask={this.addNewTaskHandler} />
        <Footer currentYear={new Date().getFullYear()} />
      </React.Fragment>
    );
  }
}

export default App;
