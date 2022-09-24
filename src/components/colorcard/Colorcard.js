import "./Colorcard.css";
import { useState } from "react";

function Colorcard({ hexValue, colorName }) {
  const [showElement, setShowElement] = useState(false);

  return (
    <li
      className="colorcard"
      style={{ backgroundColor: hexValue }}
      onClick={() => {
        navigator.clipboard.writeText(hexValue);
        /* KANN MAN DAS EIN- UND AUSBLENDEN DER COPY-MESSAGE SO MACHEN? */
        setShowElement(true);
        setTimeout(() => {
          setShowElement(false);
        }, 750);
      }}
    >
      {showElement && <p className="colorcard__copied">copied</p>}

      <div className="colorcard__textarea">
        <p className="colorcard__hex">{hexValue}</p>
        <h3 className="colorcard__name">{colorName}</h3>
      </div>
    </li>
  );
}

export default Colorcard;
