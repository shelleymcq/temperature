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
    <div className="mt-10 md:flex md:justify-around">
      <div>
        <HexColorPicker color={color} onChange={setColor} />
        <div className="p-10 flex flex-row">
          <h3 className="text-sm mr-2">Current Color</h3>
          <p style={{ backgroundColor: `${color}`, color: `${color}` }}>
            {color}
          </p>
        </div>
      </div>
      <div>
        <div className="flex mt-1">
          <div className="container m-auto grid">
            <p className="text-center text-xs w-20 h-16 m-1">
              click to enter custom temperature range
            </p>
            <div>
              <input
                type="text"
                placeholder="0 - 9"
                className="w-20 m-1 placeholder-slate-400 text-slate-600 text-center relative bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="10 - 19"
                className="w-20 m-1 placeholder-slate-400 text-slate-600 text-center relative bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="20 - 29"
                className="w-20 m-1 placeholder-slate-400 text-slate-600 text-center relative bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="30 - 39"
                className="w-20 m-1 placeholder-slate-400 text-slate-600 text-center relative bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="40 - 49"
                className="w-20 m-1 placeholder-slate-400 text-slate-600 text-center relative bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="50 - 59"
                className="w-20 m-1 placeholder-slate-400 text-slate-600 text-center relative bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="60 - 69"
                className="w-20 m-1 placeholder-slate-400 text-slate-600 text-center relative bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="70 - 79"
                className="w-20 m-1 placeholder-slate-400 text-slate-600 text-center relative bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="80 - 89"
                className="w-20 m-1 placeholder-slate-400 text-slate-600 text-center relative bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="90 +"
                className="w-20 m-1 placeholder-slate-400 text-slate-600 text-center relative bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="container m-auto grid">
            <p className="text-center text-xs w-20 h-16 m-1">
              click in box to save current color
            </p>
            {savedColors.map((item) => (
              <div key={item.id}>
                <p
                  style={{
                    backgroundColor: `${item.hex}`,
                    color: `${item.hex}`,
                  }}
                  className="w-20 ml-3 m-1 cursor-pointer"
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
