import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const cursorDot = document.createElement("div");
cursorDot.classList.add("cursor-dot");

const cursorOutline = document.createElement("div");
cursorOutline.classList.add("cursor-outline");

document.body.appendChild(cursorDot);
document.body.appendChild(cursorOutline);

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 300, fill: "forwards" }
  );
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);