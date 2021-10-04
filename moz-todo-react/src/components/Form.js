import React, { useState } from "react";

function Form(props) {
  /*useState hook take 2 argument:
        - initial state
        - a function that use for modify state later*/

  const [title, setTitle] = useState("");
  function handleChange(e) {
    //   e.target represents the element that fired the change event ? What is this ? User typing event
    setTitle(e.target.value);
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    title !== "" ? props.addTask(title) : alert("Title must not be empty");
    //   Best practice: we shouldd clear the input after your submits
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={title}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
