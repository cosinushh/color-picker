import "./Colorcard.css";
import { useState } from "react";

function Colorcard({ colorObject, removeColor }) {
  const [showElement, setShowElement] = useState(false);
  const [colorState, setColorState] = useState([colorObject]);

  return (
    <li
      className="colorcard"
      style={{ backgroundColor: colorState[0].hexValue }}
      onClick={(event) => {
        event.stopPropagation();
        navigator.clipboard.writeText(colorState[0].hexValue);
        console.log("copied!");
        /* KANN MAN DAS EIN- UND AUSBLENDEN DER COPY-MESSAGE SO MACHEN? */
        setShowElement(true);
        setTimeout(() => {
          setShowElement(false);
        }, 750);
       
      }}
    >
      <button
        type="button"
        className="colorcard__delete-button"
        onClick={() => {
          removeColor(colorState[0].id);
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
          defaultValue={colorState[0].hexValue}
          size="10"
          onChange={(event) => {
            setColorState([
              {
                ...colorState[0],
                hexValue: event.target.value,
              },
            ]);
            console.log(colorState);
          }}
        />
        <h3 className="colorcard__name">{colorState[0].colorName}</h3>
      </div>
    </li>
  );
}

export default Colorcard;
