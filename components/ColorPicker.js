import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

const savedColorsDefault = [
  {
    id: 0,
    hex: "#eeeeee",
  },
  {
    id: 1,
    hex: "#eeeeee",
  },
  {
    id: 2,
    hex: "#eeeeee",
  },
  {
    id: 3,
    hex: "#eeeeee",
  },
  {
    id: 4,
    hex: "#eeeeee",
  },
  {
    id: 5,
    hex: "#eeeeee",
  },
  {
    id: 6,
    hex: "#eeeeee",
  },
  {
    id: 7,
    hex: "#eeeeee",
  },
  {
    id: 8,
    hex: "#eeeeee",
  },
  {
    id: 9,
    hex: "#eeeeee",
  },
];

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");
  const [savedColors, setSavedColors] = useState(savedColorsDefault);

  const handleSave = (idToUpdate, hexToUpdate) => {
    setSavedColors(
      savedColors.map((previousColor) =>
        previousColor.id === idToUpdate
          ? { ...previousColor, hex: hexToUpdate }
          : previousColor
      )
    );
  };

  return (
    <div className="mt-10 flex">
      <HexColorPicker color={color} onChange={setColor} />
      <div className="p-10 w-40">
        <p style={{ backgroundColor: `${color}` }}>{color}</p>
      </div>
      <div>
        <h3>Saved Colors</h3>
        <div>
          {savedColors.map((item) => (
            <div>
              <p
                style={{ backgroundColor: `${item.hex}` }}
                key={item.id}
                className="m-2 w-30"
                onClick={() => handleSave(item.id, color)}
              >
                {item.id}: {item.hex}
              </p>
              {/* <button
                className="border"
                onClick={() => handleSave(item.id, color)}
              >
                save here
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
