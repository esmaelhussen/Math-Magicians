import './Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [calcState, setCalcState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleResult = (event) => {
    const name = event.target.textContent;
    setCalcState((prev) => ({
      ...prev,
      total: name,
    }));
  };

  const handlePressButton = (event) => {
    const keyValue = event.target.textContent;
    const result = calculate(calcState, keyValue);
    setCalcState(result);
  };
  const { total, next, operation } = calcState;

  return (
    <section className="section">
      <div className="button">
        <div className="result four-cell" onChange={handleResult}>
          {total}
          {operation}
          {next}
        </div>
        <button type="button" className="key" onClick={handlePressButton}>
          AC
        </button>
        <button type="button" className="key" onClick={handlePressButton}>
          +/-
        </button>
        <button type="button" className="key" onClick={handlePressButton}>
          %
        </button>
        <button
          type="button"
          className="key operator"
          onClick={handlePressButton}
        >
          ÷
        </button>
        <button type="button" className="key" onClick={handlePressButton}>
          7
        </button>
        <button type="button" className="key" onClick={handlePressButton}>
          8
        </button>
        <button type="button" className="key" onClick={handlePressButton}>
          9
        </button>
        <button
          type="button"
          className="key operator"
          onClick={handlePressButton}
        >
          x
        </button>
        <button type="button" className="key" onClick={handlePressButton}>
          4
        </button>
        <button type="button" className="key" onClick={handlePressButton}>
          5
        </button>
        <button type="button" className="key" onClick={handlePressButton}>
          6
        </button>
        <button
          type="button"
          className="key operator"
          onClick={handlePressButton}
        >
          -
        </button>
        <button type="button" className="key" onClick={handlePressButton}>
          1
        </button>
        <button type="button" className="key" onClick={handlePressButton}>
          2
        </button>
        <button type="button" className="key" onClick={handlePressButton}>
          3
        </button>
        <button
          type="button"
          className="key operator"
          onClick={handlePressButton}
        >
          +
        </button>
        <button
          type="button"
          className="key two-cell"
          onClick={handlePressButton}
        >
          0
        </button>
        <button type="button" className="key" onClick={handlePressButton}>
          .
        </button>
        <button
          type="button"
          className="key operator"
          onClick={handlePressButton}
        >
          =
        </button>
      </div>

    </section>
  );
}
export default Calculator;
