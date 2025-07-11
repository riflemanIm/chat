import { useEffect, useRef, useState, useCallback } from "react";

export default function useCounter(initialSeconds: number) {
  const [counter, setCounter] = useState(initialSeconds);
  const [isFinished, setIsFinished] = useState(initialSeconds <= 0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = useCallback(() => {
    if (intervalRef.current) return; // если уже запущен — не трогаем
    intervalRef.current = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null; // важно: сброс после clearInterval
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  const reset = useCallback((sec: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // и здесь тоже
    }
    setCounter(sec);
    setIsFinished(sec <= 0);
  }, []);

  useEffect(() => {
    if (!isFinished && counter > 0) {
      start();
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null; // не забываем обнулять ссылку
      }
    };
  }, [start, counter, isFinished]);

  return { counter, isFinished, reset };
}
