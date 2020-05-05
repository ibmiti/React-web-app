import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/common/Header";
import List from "./components/list/List";
import Footer from "./components/common/Footer";
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />

      <List />

      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
