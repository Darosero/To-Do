import React, { useState, useEffect } from "react";

const DateComponent = () => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.toLocaleString('default', { weekday: 'long' });
    const month = currentDate.toLocaleString("default", { month: "long" });
    const day = currentDate.getDate();
    const formattedDateString = `${dayOfWeek} ${day} de ${month}`;

    setFormattedDate(formattedDateString);
  }, []); // El array de dependencias vacío significa que este efecto se ejecutará solo una vez al montar el componente

  return <div className="text-white ">{formattedDate}</div>;
};

export default DateComponent;
