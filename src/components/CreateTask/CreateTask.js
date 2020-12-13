import React from 'react';

class CreateTask extends React.Component {

  state = {
    title: '',
    isImportant: false,
  };

  titleSetHandler = (title) => {
    this.setState({ title })
  }

  addNewTaskHandler = (title, isImportant) => {
    const { addNewTask } = this.props;
    addNewTask(title, isImportant);
    this.setState({ title: '', isImportant: false });
  }

  setImportantHandler = (prevState) => {
    this.setState(prevState = ({ isImportant: !prevState }))
  }

  render() {

    const { title, isImportant } = this.state;

    return (
      <section className="add-task">
        <h2 className="visually-hidden">Create tasks</h2>
        <form className="add-task__form" method="POST" action="#">
          <div className="add-task__wrapper">
            <input
              onChange={(evt) => this.titleSetHandler(evt.target.value)}
              value={title}
              type="text"
              className="add-task__input"
              placeholder="input task name..."
              minLength="1"
              maxLength="100"
              required
            />
            <button
              onClick={() => this.setImportantHandler(isImportant)}
              className="add-task__important"
              type="button"
              aria-label="make important"></button>
          </div>
          <button
            className="add-task__btn"
            type="button"
            onClick={() => this.addNewTaskHandler(title, isImportant)}
          >
            Add Task
        </button>
        </form>
      </section>
    )
  }

};

export default CreateTask;
