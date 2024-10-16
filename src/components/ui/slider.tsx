import { useState } from "react";

export default function Slider() {
  const [value, setValue] = useState(50);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
}
