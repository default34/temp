import { useState } from "react";

export default function ClientSidePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p>You clicked {count} times</p>
      <button
        className="mt-[12px] border border-blue-400"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}
