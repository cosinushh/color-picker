import "./Form.css";
import { useState } from "react";

function Form({ addColor, setId }) {
  const [selectedColor, setSelectedColor] = useState("#CCCCCC");

  function handleSubmit(event) {
    event.preventDefault();
    addColor(selectedColor.toUpperCase(), setId);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Select a color:{" "}
        <input
          type="color"
          name="colorPicker"
          id="colorPicker"
          onChange={(event) => {
            setSelectedColor(event.target.value);
          }}
          value={selectedColor}
        />
      </label>
      <label className="form__label form--space" htmlFor="colorText">
        or enter a color code:
      </label>
      <input
        className="form__input"
        type="text"
        name="colorText"
        id="colorText"
        onChange={(event) => {
          setSelectedColor(event.target.value);
        }}
        defaultValue={selectedColor}
      />
      <button className="form__button" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
