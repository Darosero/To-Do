import clsx from "clsx";
import { useState } from "react";

export default function AsideElement({ navigate, children, title }) {
  const isActive = "false";
  const botonClases = clsx(
    "flex",
    "gap-6",
    "px-6",
    "py-3",
    "w-full",
    "hover:bg-slate-600/50", // Clase de fondo al hacer hover
    "stroke-black"
  );
  return (
    <button
      onClick={() => {
        if (title === "Mi día") {
          isActive;
          navigate = navigate("/day");
        } else if (title === "Importante") {
          navigate = navigate("/important");
        }else if (title === "Planeado") {
          navigate = navigate("/planned");
        }
      }}
      className={botonClases}
    >
      {children}
      <h2 className=" font-semibold">{title} </h2>
    </button>
  );
}
