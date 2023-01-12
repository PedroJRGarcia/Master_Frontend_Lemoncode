import React from "react";
import { createRoot } from "react-dom/client";
import { Welcome } from "./welcome";

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <Welcome />
    </div>
);