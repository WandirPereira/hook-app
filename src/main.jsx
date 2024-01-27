import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HooksApp } from "./HooksApp";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomhook } from "./01-useState/CounterWithCustomhook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    {/* <HooksApp />
    <CounterApp />
    <CounterWithCustomhook />
    <SimpleForm /> */}
    <FormWithCustomHook />
    {/* // </React.StrictMode> */}
  </>
);
