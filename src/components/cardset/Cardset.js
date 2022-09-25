import "./Cardset.css";
import Colorcard from "../colorcard/Colorcard";
import Form from "../form/Form";

function Cardset({
  colors,
  addColor,
  removeColor,
  changeColor,
  title,
  id,
  changeSetName,
  removeSet,
}) {
  return (
    <section className="cardset">
      <input
        className="cardset__title"
        type="text"
        defaultValue={title}
        onChange={(event) => {
          const newSetName = event.target.value;
          changeSetName(id, newSetName);
        }}
      />
      <Form addColor={addColor} setId={id} />
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
      <button
        type="button"
        className="colorcard__button"
        onClick={(event) => {
          removeSet(id);
        }}
      >
        REMOVE SET
      </button>
    </section>
  );
}

export default Cardset;
