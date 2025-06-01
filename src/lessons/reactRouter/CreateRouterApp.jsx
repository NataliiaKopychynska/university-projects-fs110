import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

function CreateRouterApp() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default CreateRouterApp;
