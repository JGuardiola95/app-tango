import { useFibonacciCalculator } from '@/store/fibonacciCalculatorStore';
import { ChangeEvent } from 'react';
import styles from '@/styles/FibonacciCalculator.module.css';

export default function FibonacciCalculator() {
  return (
    <>
      <FibonacciForm />
      <FibonacciResultViewer />
    </>
  );
}

function FibonacciForm() {
  const { number, setNumber, handleFibonacciNumber, fibonacciNumber } = useFibonacciCalculator();

  const handleInput = (ev: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(ev.target.value));
  };

  const isNaN = typeof Number(number) !== 'number';

  return (
    <div className={styles['form-container']}>
      <input autoComplete="off" type="number" value={number} onChange={handleInput} />
      <button onClick={handleFibonacciNumber} disabled={!number || isNaN}>
        Calculate
      </button>
    </div>
  );
}

function FibonacciResultViewer() {
  const { fibonacciNumber } = useFibonacciCalculator();
  return (
    <div>
      Fibonacci result: <strong>{fibonacciNumber}</strong>
    </div>
  );
}
