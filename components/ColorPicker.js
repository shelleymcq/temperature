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

const tempRangeDefault = [
  { id: "temp01", value: "0 - 9" },
  { id: "temp02", value: "10 - 19" },
  { id: "temp02", value: "20 - 29" },
  { id: "temp02", value: "30 - 39" },
  { id: "temp02", value: "40 - 49" },
  { id: "temp02", value: "50 - 59" },
  { id: "temp02", value: "60 - 69" },
  { id: "temp02", value: "70 - 79" },
  { id: "temp02", value: "80 - 89" },
  { id: "temp02", value: "90 - 99" },
];

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");
  const [savedColors, setSavedColors] = useState(savedColorsDefault);
  const [tempRange, setTempRange] = useState(tempRangeDefault);

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
    <div className="mt-10 md:flex">
      <HexColorPicker color={color} onChange={setColor} />
      <div className="p-10 w-40">
        <h3>Current Color</h3>
        <p style={{ backgroundColor: `${color}`, color: `${color}` }}>
          {color}
        </p>
      </div>
      <div>
        <h3>Saved Colors</h3>
        <div className="flex">
          <p className="text-xs w-20">temperature range</p>
          <p className="text-xs w-20">click in box to save current color</p>
        </div>
        <div className="flex mt-5">
          <div className="container m-auto grid">
            {tempRange.map((item) => (
              <div key={item.id}>
                <p className="w-30 m-1">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="container m-auto grid">
            {savedColors.map((item) => (
              <div key={item.id}>
                <p
                  style={{
                    backgroundColor: `${item.hex}`,
                    color: `${item.hex}`,
                  }}
                  className="w-30 m-1"
                  onClick={() => handleSave(item.id, color)}
                >
                  {item.hex}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
