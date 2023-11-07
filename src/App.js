import React from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import OperationPanel from "./components/OperationPanel";
import LogoBar from "./components/LogoBar";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";

function Edit() {
  return (
    <div>
      <h1>Edit</h1>
      <NavLink to="/">Go to main</NavLink>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <LogoBar />
          <OperationPanel />
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/edit" element={<Edit />}></Route>
          </Routes>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
