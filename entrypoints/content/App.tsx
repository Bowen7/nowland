import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Draggable } from "./draggable";

export const App = () => {
  const [count, setCount] = useState(1);
  const increment = () => setCount((count) => count + 1);

  return (
    <Draggable>
      <div className="bg-black text-white rounded-full h-full flex items-center px-2">
        123
      </div>
    </Draggable>
  );
};
