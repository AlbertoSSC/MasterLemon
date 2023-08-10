import React from "react";
import { createRoot } from "react-dom/client";
import "./mystyles.scss";
import logoImg from "./content/logo.jpg";

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1 className="red-color">Hola Mundo</h1>
        <img src={logoImg} alt="logo" />
    </div>
);