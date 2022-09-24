import "./Cardset.css";
import Colorcard from "../colorcard/Colorcard";

function Cardset() {
  return (
    <article className="cardset">
      <h2 className="cardset__title">Cardset Title</h2>
      {/* Colorpicker */}
      <div className="cardset__colorcards">
        <Colorcard />
        <Colorcard />
        <Colorcard />
      </div>
    </article>
  );
}

export default Cardset;
