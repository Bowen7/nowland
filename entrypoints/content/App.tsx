import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Draggable } from "./draggable";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const App = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      axis: "y",
      watchDrag: false,
    },
    [Autoplay()]
  );

  return (
    <Draggable>
      <div className="bg-black text-white rounded-full h-full flex items-center px-2 border border-neutral-400">
        <div className="overflow-hidden w-full h-full" ref={emblaRef}>
          <div className="flex flex-col h-full">
            <div className="min-h-0 flex-[0_0_100%] flex items-center">
              Slide 1
            </div>
            <div className="min-w-0 flex-[0_0_100%] flex items-center">
              Slide 2
            </div>
            <div className="min-w-0 flex-[0_0_100%] flex items-center">
              Slide 3
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};
