import "./App.css";
import Cardset from "./components/cardset/Cardset.js";
import { useState, useEffect } from "react";

function App() {
  /* const initialColors = [
    {
      id: "a65639eb-1319-46e5-ab15-810f70e9f31a",
      setId: "b4bd938f-88c3-4891-ac92-130f2ab99bb3",
      hexValue: "#35C44E",
      colorName: "Emerald",
    },
    {
      id: "af25acac-0d57-43a7-89e0-0b5fe7ffc08b",
      setId: "b4bd938f-88c3-4891-ac92-130f2ab99bb3",
      hexValue: "#656E5E",
      colorName: "Willow Grove",
    },
    {
      id: "acf15b71-60ad-4809-a4aa-2cfc00c9d754",
      setId: "ce8b988f-8c4a-4a4c-b18b-790b38a139b9",
      hexValue: "#C7C481",
      colorName: "Pine Glade",
    },
    {
      id: "84ddee2f-8e19-4166-a327-da94759592c4",
      setId: "ce8b988f-8c4a-4a4c-b18b-790b38a139b9",
      hexValue: "#0AD05D",
      colorName: "Malachite",
    },
    {
      id: "0e0b9930-8ec0-47d3-9d7e-5db228bb55eb",
      setId: "ce8b988f-8c4a-4a4c-b18b-790b38a139b9",
      hexValue: "#90C6BA",
      colorName: "Shadow Green",
    },
  ];

  const initialSets = [
    {
      id: "b4bd938f-88c3-4891-ac92-130f2ab99bb3",
      setName: "Set 1",
    },
    {
      id: "f7de8c30-a48b-41cf-a2a4-24c41b29539c",
      setName: "Set 2",
    },
    {
      id: "ce8b988f-8c4a-4a4c-b18b-790b38a139b9",
      setName: "Set 3",
    },
  ]; */

  const [colors, setColors] = useState(readLocalStorage("colors") ?? []);
  const [sets, setSets] = useState(readLocalStorage("sets") ?? []);

  function readLocalStorage(storageName) {
    const localStorageData = localStorage.getItem(storageName);
    return JSON.parse(localStorageData);
  }

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
    localStorage.setItem("sets", JSON.stringify(sets));
  }, [colors, sets]);

  async function getColorName(hexValue) {
    const modifiedHexValue = hexValue.substring(1);
    const response = await fetch(
      `https://www.thecolorapi.com/id?hex=${modifiedHexValue}`
    );
    const data = await response.json();
    return data.name.value;
  }

  async function addColor(newColor, setId) {
    const newColorName = await getColorName(newColor);
    setColors([
      {
        id: Math.random().toString(36).substring(2),
        setId: setId,
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

  function addNewSet() {
    setSets([
      ...sets,
      { id: Math.random().toString(36).substring(2), setName: "New Set" },
    ]);
  }

  function changeSetName(setId, NewSetName) {
    setSets(
      sets.map((set) => {
        if (set.id === setId) {
          return { ...set, setName: NewSetName };
        } else {
          return set;
        }
      })
    );
  }

  function removeSet(setId) {
    const newSets = sets.filter((set) => {
      return setId !== set.id;
    });
    setSets(newSets);
  }

  return (
    <main className="App">
      {sets.map((set) => {
        return (
          <Cardset
            title={set.setName}
            colors={colors.filter((color) => color.setId === set.id)}
            addColor={addColor}
            removeColor={removeColor}
            changeColor={changeColor}
            addNewSet={addNewSet}
            changeSetName={changeSetName}
            removeSet={removeSet}
            key={set.id}
            id={set.id}
          />
        );
      })}
      <button className="app__button" onClick={addNewSet}>
        New Set
      </button>
    </main>
  );
}

export default App;
