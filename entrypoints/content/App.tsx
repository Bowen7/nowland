import { useState } from "react";
import { Button } from "@/components/ui/button";

export default () => {
  const [count, setCount] = useState(1);
  const increment = () => setCount((count) => count + 1);

  return (
    <div className="flex">
      <p>This is React. {count}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};
