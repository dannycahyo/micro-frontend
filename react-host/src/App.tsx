/* eslint-disable @typescript-eslint/ban-ts-comment */
import reactLogo from "./assets/react.svg";
import vueLogo from "./assets/logo.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";
import VueWrapper from "./VueWrapper";
const RemoteReactButton = React.lazy(
  () => import("remoteApp/Button"),
);
// @ts-ignore
import RemoteHelloWorld from "remoteSimple/remote-hello-world";

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
        <a href="https://vuejs.dev" target="_blank">
          <img alt="Vue logo" src={vueLogo} width="35" height="35" />
        </a>
      </div>

      <h1>Micro Frontend</h1>
      <React.Suspense fallback="Loading...">
        <div className="remote-box react-remote">
          <h3>Button from Another React Remote App</h3>
          <RemoteReactButton defaultCount={20} />
        </div>
      </React.Suspense>
      <div className="remote-box vue-remote">
        <h3>Vue Component from Another Vue Remote App</h3>
        <VueWrapper
          component={RemoteHelloWorld}
          props={{ msg: "Props Value" }}
        />
      </div>
    </>
  );
}

export default App;
