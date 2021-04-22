import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

function Calendars() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={true}
        style={{ margin: "20px" }}
      />
      <div className="button">
        <button style={{ marginRight: "15px" }}>Cancel</button>
        <button style={{ backgroundColor: "#82C341" }}>Filter</button>
      </div>
    </div>
  );
}

export default Calendars;
