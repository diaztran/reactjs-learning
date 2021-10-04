import React, { useState } from "react";

function Todo(props) {
  //   console.log(props);
  const [isEditing, setEditingState] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  function handleChange(e) {
    setNewTitle(e.target.value);
  }

  // TODO: We just change the state of Todo, not its value. Now we must sync the title to the UI.
  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newTitle);
    //   Follow best practice, reset all the state to default
    setEditingState(false);
    setNewTitle("");
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.title}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newTitle}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditingState(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.title}</span>
        </button>

        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.title}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.title}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => {
            setEditingState(true);
          }}
        >
          Edit <span className="visually-hidden">{props.title}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.title}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;
