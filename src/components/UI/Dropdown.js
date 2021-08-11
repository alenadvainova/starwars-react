import React from "react";
import "../../css/Dropdown.css";

const Dropdown = ({ data, onOptionChange, selOptionId }) => {
  return (
    <div className="dropdown">
      <select onChange={onOptionChange} defaultValue={selOptionId}>
        {data.map((item) => (
          <option key={item[0]} value={item[0]}>
            {item[1].name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
