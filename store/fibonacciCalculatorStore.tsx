import { getFibonacciNumber } from '@/services/getFibonacciNumber';
import { createContext, Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from 'react';

interface FibonacciCalculatorSource {
  number: number | undefined;
  setNumber: Dispatch<SetStateAction<number | undefined>>;
  fibonacciNumber: number | undefined;
  handleFibonacciNumber: () => void;
}

export const useFibonacciCalculatorSource = () => {
  const [number, setNumber] = useState<number>();
  const [fibonacciNumber, setFibonacciNumber] = useState<number>();

  const handleFibonacciNumber = useCallback(async () => {
    if (number) {
      const fetchedFibonacciNumber = await getFibonacciNumber(number);
      setFibonacciNumber(fetchedFibonacciNumber);
    }
  }, [number]);

  // useEffect(() => {
  //   handleFibonacciNumber();
  // }, [handleFibonacciNumber]);

  return { number, fibonacciNumber, setNumber, handleFibonacciNumber };
};

const FibonacciCalculatorContext = createContext<FibonacciCalculatorSource>({} as FibonacciCalculatorSource);

export const useFibonacciCalculator = () => {
  return useContext(FibonacciCalculatorContext);
};

export function FibonacciCalculatorProvider({ children }: { children: JSX.Element }) {
  return (
    <FibonacciCalculatorContext.Provider value={useFibonacciCalculatorSource()}>
      {children}
    </FibonacciCalculatorContext.Provider>
  );
}
