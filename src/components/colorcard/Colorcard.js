import "./Colorcard.css";
import { useState } from "react";

function Colorcard({ singleColor, removeColor, changeColor }) {
  const [showElement, setShowElement] = useState(false);

  function clickHandle(event) {
    navigator.clipboard.writeText(singleColor.hexValue);
    console.log("copied!");
    /* KANN MAN DAS EIN- UND AUSBLENDEN DER COPY-MESSAGE SO MACHEN? */
    setShowElement(true);
    setTimeout(() => {
      setShowElement(false);
    }, 750);
  }

  return (
    <li
      className="colorcard"
      style={{ backgroundColor: singleColor.hexValue }}
      onClick={clickHandle}
    >
      <button
        type="button"
        className="colorcard__delete-button"
        onClick={(event) => {
          event.stopPropagation();
          removeColor(singleColor.id);
        }}
      >
        <svg
          className="colorcard__delete-icon card__delete"
          viewBox="-2.6 -1.9 30 30"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
      {showElement && <p className="colorcard__copied">copied</p>}

      <div className="colorcard__textarea">
        <input
          className="colorcard__hex"
          defaultValue={singleColor.hexValue}
          size="10"
          onClick={(event) => {
            event.stopPropagation();
          }}
          onChange={(event) => {
            const newHex = event.target.value;
            changeColor(singleColor.id, newHex);
          }}
        />
        <h3 className="colorcard__name">{singleColor.colorName}</h3>
      </div>
    </li>
  );
}

export default Colorcard;
