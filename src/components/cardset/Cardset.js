import "./Cardset.css";
import Colorcard from "../colorcard/Colorcard";
import Form from "../form/Form";

function Cardset({ colors, addColor, removeColor }) {
  return (
    <section className="cardset">
      <h2 className="cardset__title">Cardset Title</h2>
      <Form addColor={addColor} />
      <ul className="cardset__colorcards">
        {colors.map((color) => {
          return (
            <Colorcard
              key={color.id}
              colorObject={color}
              removeColor={removeColor}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Cardset;
