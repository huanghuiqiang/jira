import React from "react";
import "./App.css";
// import { PorjextListScreen } from "screens/project-list";
import { TodoList } from "./screens/TodoList/index";
function App() {
  return (
    <div className="App">
      {/* <PorjextListScreen /> */}
      <TodoList />
    </div>
  );
}

export default App;
