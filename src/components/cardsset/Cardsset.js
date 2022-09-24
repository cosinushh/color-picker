import "./Cardsset.css";
import Colorcard from "../colorcard/Colorcard";

function Cardsset() {
  return (
    <article className="cardsset">
      <h2 className="cardsset__title">Cardset Title</h2>
      {/* Colorpicker */}
      <div className="cardset__colorcards">
        <Colorcard />
        <Colorcard />
        <Colorcard />
      </div>
    </article>
  );
}

export default Cardsset;
