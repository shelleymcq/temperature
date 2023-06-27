import { FaHardHat } from "react-icons/fa";
import { Shadows_Into_Light } from "next/font/google";
import ColorPicker from "@/components/ColorPicker";

const shadows = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

const Palette = () => {
  return (
    <div className="bg-slate-100 flex flex-col pt-20 px-5 min-h-screen">
      <div className={shadows.className}>
        <h2 className="text-2xl font-bold text-sky-600">Palette Planner</h2>
      </div>
      <p className="text-rose-700">This feature is under contruction.</p>
      <p>
        <FaHardHat />
      </p>
      <p className="py-2">
        You can pick colors from the color selector on the left by dragging one
        of the circles to any color you like.
      </p>
      <p>You can customize your palette to the right.</p>
      <ColorPicker />
    </div>
  );
};

export default Palette;
