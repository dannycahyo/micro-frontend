import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";
const Button = React.lazy(() => import("remoteApp/Button"));

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Micro Frontend</h1>
      <h3>Button from Another React Remote App</h3>
      <React.Suspense fallback="Loading Button">
        <Button />
      </React.Suspense>
    </>
  );
}

export default App;
