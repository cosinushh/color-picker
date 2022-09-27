import "./Form.css";
import { useState } from "react";

function Form({ addColor, setId }) {
  //
  // --- STATES ---

  const [selectedColor, setSelectedColor] = useState("");

  //
  // --- HANDLER ---

  function handleSubmit(event) {
    event.preventDefault();
    addColor(selectedColor.toUpperCase(), setId);
  }

  //
  // --- MAIN ---

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      /* style={{ backgroundColor: selectedColor }} */
    >
      <label>
        Select a color:{" "}
        <input
          type="color"
          name="colorPicker"
          id="colorPicker"
          onChange={(event) => {
            setSelectedColor(event.target.value);
          }}
          value={selectedColor.toUpperCase()}
        />
      </label>
      <label className="form--space" htmlFor="colorText">
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
        value={selectedColor.toUpperCase()}
      />
      <button className="form__button" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
