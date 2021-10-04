// THREE MAIN PARTS

// Part 1 : Importing
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

// import logo from "./logo.svg";
// import "./App.css";

// Part 2: App component

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

console.log("FILTER: " + FILTER_NAMES);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [activeFilter, setActiveFilter] = useState("All");

  function addNewTask(title) {
    const newTask = { id: "todo-" + nanoid(), title: title, completed: false };
    setTasks([...tasks, newTask]); //Destructuring
    console.log(props.tasks);
  }

  // Use only for dis play UI component, not for logic processing
  const taskList = tasks.filter(FILTER_MAP[activeFilter]).map((task) => (
    <Todo
      id={task.id}
      title={task.title}
      completed={task.completed}
      key={task.id}
      // Callback functions
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      filterType={name}
      isActive={name === activeFilter}
      setActiveFilter={setActiveFilter}
    />
  ));

  function toggleTaskCompleted(taskID) {
    const updatedTaskList = tasks.map((task) => {
      if (task.id === taskID) {
        return { ...task, completed: !task.completed };
      }

      // If id not match
      return task;
    });

    // Then update state for tasks with setTask function
    setTasks(updatedTaskList);
  }

  function deleteTask(taskID) {
    const updatedTaskList = tasks.filter((task) => taskID !== task.id);
    setTasks(updatedTaskList);
  }

  function editTask(taskID, newTitle) {
    const updatedTaskList = tasks.map((task) => {
      if (task.id === taskID) {
        return { ...task, title: newTitle };
      }

      // If id not mathc
      return task;
    });

    setTasks(updatedTaskList);
  }

  const taskGrammar = taskList.length <= 1 ? "task" : "tasks";
  const remainingTaskCount = `${taskList.length} ${taskGrammar} remaining`;

  // const btnFilterList = props.btnfilters.map((btnfilter) => (
  //   <FilterButton filterType={btnfilter.filterType} />
  // ));

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addNewTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading">{remainingTaskCount}</h2>
      <ul
        // role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

// Part 3: Exporting
export default App;
