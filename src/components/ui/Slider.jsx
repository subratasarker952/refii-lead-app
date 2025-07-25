import * as Slider from "@radix-ui/react-slider";
import React from "react";

export default function ReusableSlider({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) {
  return (
    <Slider.Root
      className={`relative flex items-center select-none touch-none w-full h-5 ${className}`}
      value={value}
      onValueChange={onValueChange}
      min={min}
      max={max}
      step={step}
    >
      <Slider.Track className="bg-gray-200 relative grow rounded-full h-[6px]">
        <Slider.Range className="absolute bg-green-500 rounded-full h-full" />
      </Slider.Track>
      <Slider.Thumb className="block w-5 h-5 bg-white border border-gray-300 rounded-full shadow hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500" />
    </Slider.Root>
  );
}
