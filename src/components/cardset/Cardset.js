import "./Cardset.css";
import Colorcard from "../colorcard/Colorcard";
import Form from "../form/Form";

function Cardset({ colors, addColor, removeColor, changeColor, title }) {
  console.log(title);
  return (
    <section className="cardset">
      <h2 className="cardset__title">{title}</h2>
      <Form addColor={addColor} />
      <ul className="cardset__colorcards">
        {colors.map((color) => {
          return (
            <Colorcard
              key={color.id}
              singleColor={color}
              removeColor={removeColor}
              changeColor={changeColor}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Cardset;
