import { useEffect, useRef, useState } from "react";

export default function useCounter(max = 30000) {
  const [counter, setCounter] = useState(max);
  const counterRef = useRef();

  const handlerRefresh = () => {
    setCounter(max);
  };

  // Counter
  useEffect(() => {
    counterRef.current =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(counterRef.current);
  }, [counter]);

  return { counter, handlerRefresh };
}
