import { useEffect, useRef, useState } from "react";

export default function useCounter(max = 30000) {
  const [counter, setCounter] = useState(max);
  const counterRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handlerRefresh = () => {
    setCounter(max);
  };

  // Counter
  useEffect(() => {
    if (counter > 0)
      counterRef.current = setInterval(
        () => setCounter(prev => prev - 1),
        1000
      );

    return () => {
      if (counterRef.current) clearInterval(counterRef.current);
    };
  }, [counter]);

  return { counter, handlerRefresh };
}
