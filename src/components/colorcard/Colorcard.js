import "./Colorcard.css";

function Colorcard({ hexValue, colorName }) {
  console.log(hexValue, colorName);
  return (
    <section className="colorcard" style={{ backgroundColor: hexValue }}>
      <p className="colorcard__hex">{hexValue}</p>
      <h3 className="colorcard__name">{colorName}</h3>
    </section>
  );
}

export default Colorcard;
