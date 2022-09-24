import "./Cardset.css";
import Colorcard from "../colorcard/Colorcard";

function Cardset({ colors }) {
  return (
    <ul className="cardset">
      <h2 className="cardset__title">Cardset Title</h2>
      {/* Colorpicker */}
      <div className="cardset__colorcards">
        {colors.map((color) => {
          return (
            <Colorcard
              key={color.id}
              hexValue={color.hexValue}
              colorName={color.colorName}
            />
          );
        })}
      </div>
    </ul>
  );
}

export default Cardset;
