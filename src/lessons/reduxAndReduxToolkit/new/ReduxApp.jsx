import React from "react";
import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";

function ReduxApp() {
  return (
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  );
}

export default ReduxApp;
