import React from "react";
import { createRoot } from "react-dom/client";
import "./mystyles.scss";
import logoImg from './content/logo_1.jpg';

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1 className="red-background">Hello from React DOM</h1>
        <img src={logoImg} alt="logo" />
    </div>
);

console.log(`Api base: ${process.env.API_BASE}`);