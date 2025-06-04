import React from "react";
import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppBar } from "./components/AppBar/AppBar";
import TaskForm from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";

function ReduxApp() {
  return (
    <Provider store={store}>
      <Layout>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layout>
    </Provider>
  );
}

export default ReduxApp;
