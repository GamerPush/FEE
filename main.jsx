import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StateLifting from "./StateLifting";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <StateLifting />
    </StrictMode>
);