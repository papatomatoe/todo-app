import React from 'react';

class CreateTask extends React.Component {

  state = {
    title: '',
    isImportant: false,
    isError: false,
  };

  styles = {
    input: {
      normal: {
        borderColor: '#ffffff',
        color: '#ffffff',
        backgroundColor: 'transparent'
      },
      important: {
        borderColor: '#dc143c',
        color: '#dc143c'
      },
      error: {
        borderColor: '#ff0000',
        backgroundColor: '#ff0000'
      }
    },
    button: {
      normal: {
        borderColor: '#ffffff',
        backgroundColor: 'transparent'
      },
      important: {
        borderColor: '#dc143c',
        backgroundColor: '#dc143c'
      }
    }
  }

  titleSetHandler = (title) => {
    this.setState({ title })
  }

  addNewTaskHandler = (title, isImportant) => {
    const { addNewTask } = this.props;
    if (!title) {
      this.setState({ isError: true });
      return;
    }
    addNewTask(title, isImportant);
    this.setState({ title: '', isImportant: false });
  }

  setImportantHandler = (prevState) => {
    this.setState(prevState = ({ isImportant: !prevState }))
  }

  render() {

    const { title, isImportant, isError } = this.state;
    const inputStyles = isImportant ? this.styles.input.important : this.styles.input.normal

    return (
      <section className="add-task">
        <h2 className="visually-hidden">Create tasks</h2>
        <form className="add-task__form" method="POST" action="#">
          <div className="add-task__wrapper">
            <input
              onChange={(evt) => {
                this.titleSetHandler(evt.target.value);
                this.setState({ isError: false })
              }}
              value={title}
              type="text"
              className="add-task__input"
              placeholder={"input task name..."}
              minLength="1"
              maxLength="100"
              required={true}
              style={isError ? this.styles.input.error : inputStyles}
            />
            <button
              onClick={() => this.setImportantHandler(isImportant)}
              className="add-task__important"
              type="button"
              aria-label="make important"
              style={isImportant ? this.styles.button.important : this.styles.button.normal}></button>
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
