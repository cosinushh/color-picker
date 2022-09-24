import "./Form.css";
import { useState } from "react";

function Form({ addColor }) {
  const [selectedColor, setSelectedColor] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
    addColor(selectedColor[0].toUpperCase());
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="color"
        name="colorPicker"
        onChange={(event) => {
          setSelectedColor([event.target.value]);
        }}
        value={selectedColor}
      />
      <input
        type="text"
        name="colorText"
        id="colorText"
        onChange={(event) => {
          setSelectedColor([event.target.value]);
        }}
        defaultValue={selectedColor}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
