import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todolist" component={TodoList}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
