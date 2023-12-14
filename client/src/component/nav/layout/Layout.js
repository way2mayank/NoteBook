import React from "react";
import Header from "../header/Header";
import { Helmet } from "react-helmet";
const Layout = ({ children, title }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Helmet>
        <title>{title ? `${title} ` : "Notes Keeping"}</title>
      </Helmet>
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
};

export default Layout;
