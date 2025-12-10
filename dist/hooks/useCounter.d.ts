type UseCounterOptions = {
    paused?: boolean;
};
export default function useCounter(initialSeconds: number, options?: UseCounterOptions): {
    counter: number;
    isFinished: boolean;
    reset: (sec: number) => void;
};
export {};
//# sourceMappingURL=useCounter.d.ts.map