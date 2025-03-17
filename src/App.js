import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Row from "./Row";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = null;
  return (
    <div className="app">
      {/* <HomeScreen /> */}
      <Router>
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/" element={<LoginScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
