import { useEffect, useRef } from "react";

type Callback = () => void;
type ActivationFlag = boolean | number | string | null | undefined;

export default function useInterval(
  callback: Callback,
  active: ActivationFlag,
  delay: number
): void {
  const savedCallback = useRef<Callback>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    const tick = () => {
      savedCallback.current();
    };
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [active, delay]);
}
