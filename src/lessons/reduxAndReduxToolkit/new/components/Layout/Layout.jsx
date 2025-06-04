import css from "./Layout.module.css";

import React from "react";

function Layout({ children }) {
  return <main className={css.container}>{children}</main>;
}

export default Layout;
