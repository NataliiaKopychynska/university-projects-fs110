import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppBar } from "./components/AppBar/AppBar";
import TaskForm from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { fetchTasks } from "./redux/operations";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tasks.isLoading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div>
      {isLoading && !error && <b>Request in progress...</b>}
      <AppBar />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
