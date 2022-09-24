import "./App.css";
import Cardset from "./components/cardset/Cardset.js";
import { useState } from "react";

function App() {
  const initialColors = [
    {
      id: Math.random().toString(36).substring(2),
      hexValue: "#35C44E",
      colorName: "Emerald",
    },
    {
      id: Math.random().toString(36).substring(2),
      hexValue: "#656E5E",
      colorName: "Willow Grove",
    },
    {
      id: Math.random().toString(36).substring(2),
      hexValue: "#C7C481",
      colorName: "Pine Glade",
    },
    {
      id: Math.random().toString(36).substring(2),
      hexValue: "#0AD05D",
      colorName: "Malachite",
    },
    {
      id: Math.random().toString(36).substring(2),
      hexValue: "#90C6BA",
      colorName: "Shadow Green",
    },
  ];
  const [colors, setColors] = useState(initialColors);

  function addColor(newColor) {
    setColors([
      ...colors,
      {
        id: Math.random().toString(36).substring(2),
        hexValue: newColor,
        colorName: "Default Color",
      },
    ]);
    console.log(colors);
  }

  function removeColor(colorId) {
    const newColors = colors.filter((color) => {
      return colorId !== color.id;
    });
    setColors(newColors);
    console.log(colors);
  }

  return (
    <main className="App">
      <Cardset colors={colors} addColor={addColor} removeColor={removeColor} />
      <Cardset colors={colors} />
    </main>
  );
}

export default App;
