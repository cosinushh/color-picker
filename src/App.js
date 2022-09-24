import "./App.css";
import Cardset from "./components/cardset/Cardset.js";

function App() {
  const initialColors = [
    { id: 1, hexValue: "#35C44E", colorName: "Emerald" },
    { id: 2, hexValue: "#656E5E", colorName: "Willow Grove" },
    { id: 3, hexValue: "#C7C481", colorName: "Pine Glade" },
    { id: 4, hexValue: "#0AD05D", colorName: "Malachite" },
    { id: 5, hexValue: "#90C6BA", colorName: "Shadow Green" },
  ];
  return (
    <div className="App">
      <Cardset colors={initialColors} />
      <Cardset colors={initialColors} />
    </div>
  );
}

export default App;
