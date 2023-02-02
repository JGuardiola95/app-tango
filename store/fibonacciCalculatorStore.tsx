import { getFibonacciNumber } from '@/services/getFibonacciNumber';
import axios, { AxiosError } from 'axios';
import { createContext, Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from 'react';

interface FibonacciCalculatorSource {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
  fibonacciNumber: number;
  handleFibonacciNumber: () => void;
  errorMsg: string;
}

export const useFibonacciCalculatorSource = () => {
  const [number, setNumber] = useState<number>(0);
  const [fibonacciNumber, setFibonacciNumber] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleFibonacciNumber = useCallback(async () => {
    try {
      setErrorMsg('');
      if (number) {
        const fetchedFibonacciNumber = (await getFibonacciNumber(number)) || 0;
        setFibonacciNumber(fetchedFibonacciNumber);
      }
    } catch (error) {
      let errMsg = 'Something went wrong. Check if API is up';
      if (axios.isAxiosError(error) && error.response && error.response.data) {
        errMsg = error.response.data.message;
      }
      setErrorMsg(errMsg);
    }
  }, [number]);

  // useEffect(() => {
  //   handleFibonacciNumber();
  // }, [handleFibonacciNumber]);

  return { number, fibonacciNumber, setNumber, handleFibonacciNumber, errorMsg };
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
