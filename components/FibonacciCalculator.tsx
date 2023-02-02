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
    let value = Number(ev.target.value);
    if (!isNaN(value)) {
      setNumber(value);
    }
  };

  return (
    <div className={styles['form-container']}>
      <input type="text" pattern="[0-9]*" value={number} onChange={handleInput} />
      <button onClick={handleFibonacciNumber} disabled={!number || isNaN(Number(number))}>
        Calculate
      </button>
    </div>
  );
}

function FibonacciResultViewer() {
  const { fibonacciNumber, errorMsg } = useFibonacciCalculator();
  return (
    <>
      <div>
        Fibonacci result: <strong>{fibonacciNumber}</strong>
      </div>
      <div className={styles.error}>{errorMsg}</div>
    </>
  );
}
