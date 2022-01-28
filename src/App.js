import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import RoutingFramework from "./routes";

function App() {
  return (
    <Router>
      <RoutingFramework />
    </Router>
  );
}

export default App;
