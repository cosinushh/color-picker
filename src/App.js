import "./App.css";
import Cardset from "./components/cardset/Cardset.js";
import { useState, useEffect } from "react";

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
  const [colors, setColors] = useState(readLocalStorage() ?? initialColors);

  function readLocalStorage() {
    const localStorageData = localStorage.getItem("colors");
    return JSON.parse(localStorageData);
  }

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  async function getColorName(hexValue) {
    const modifiedHexValue = hexValue.substring(1);
    const response = await fetch(
      `https://www.thecolorapi.com/id?hex=${modifiedHexValue}`
    );
    const data = await response.json();
    return data.name.value;
  }

  async function addColor(newColor) {
    const newColorName = await getColorName(newColor);
    setColors([
      {
        id: Math.random().toString(36).substring(2),
        hexValue: newColor,
        colorName: newColorName,
      },
      ...colors,
    ]);
  }

  function removeColor(colorId) {
    const newColors = colors.filter((color) => {
      return colorId !== color.id;
    });
    setColors(newColors);
    console.log(colors);
  }

  async function changeColor(colorId, newHex) {
    const newColorName = await getColorName(newHex);
    setColors(
      colors.map((color) => {
        if (color.id === colorId) {
          return { ...color, hexValue: newHex, colorName: newColorName };
        } else {
          return color;
        }
      })
    );
  }

  return (
    <main className="App">
      <Cardset
        colors={colors}
        addColor={addColor}
        removeColor={removeColor}
        changeColor={changeColor}
      />
      <Cardset colors={colors} />
    </main>
  );
}

export default App;
