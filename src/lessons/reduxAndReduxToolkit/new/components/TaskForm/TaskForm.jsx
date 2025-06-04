import React from "react";
import css from "./TaskForm.module.css";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations";
// import { addTask } from "../../redux/actions";

function TaskForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    dispatch(addTask(e.target.elements.text.value));

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="enter task text.."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
}

export default TaskForm;
