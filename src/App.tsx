import React from "react";
import "./App.css";
// import { PorjextListScreen } from "screens/project-list/index";
// import {ListOutput} from 'screens/TodoList/tyr-use-array';
import { LoginScreen } from "screens/login/index";

function App() {
  return (
    <div className="App">
      {/* <PorjextListScreen /> */}
      <LoginScreen />
    </div>
  );
}

export default App;
