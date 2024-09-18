export default function useCounter(max?: number): {
    counter: number;
    handlerRefresh: () => void;
};
