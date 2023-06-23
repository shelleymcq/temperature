import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");

  const temperatureBands = [
    {
      low: 11,
      high: 20,
      color: "#b49be6",
    },
    {
      low: 21,
      high: 30,
      color: "#c16060",
    },
    {
      low: 31,
      high: 40,
      color: "#49c13c",
    },
  ];

  return (
    <div className="mt-10 flex">
      <HexColorPicker color={color} onChange={setColor} />
      <div className="p-10 w-40">
        <p style={{ backgroundColor: `${color}` }}>{color}</p>
      </div>
      <div>
        {temperatureBands.map((band, index) => (
          <div className="flex" key={index}>
            <p className="px-2">{band.low}</p>
            <p className="px-2">{band.high}</p>
            <p
              style={{ backgroundColor: band.color }}
              className="m-1 px-2 w-40"
            >
              {band.color}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
