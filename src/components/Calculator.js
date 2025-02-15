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
    const newTotal = event.target.textContent;
    setCalcState((prev) => ({
      ...prev,
      total: newTotal,
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
      <div className="button grid grid-cols-[5rem_5rem_5rem_5rem]">
        <div className="result four-cell col-span-4 bg-[#858694] text-right text-2xl p-2 h-14 border border-solid border-[#cecdcd]" onChange={handleResult}>
          {total}
          {operation}
          {next}
        </div>
        <button type="button" className="key bg-[#e6e4e4] h-14 border border-solid border-[#cecdcd]" onClick={handlePressButton}>
          AC
        </button>
        <button type="button" className="key bg-[#e6e4e4] border border-solid border-[#cecdcd]" onClick={handlePressButton}>
          +/-
        </button>
        <button type="button" className="key bg-[#e6e4e4] border border-solid border-[#cecdcd]" onClick={handlePressButton}>
          %
        </button>
        <button
          type="button"
          className="key operator bg-[#ff9832] border border-solid border-[#cecdcd]"
          onClick={handlePressButton}
        >
          ÷
        </button>
        <button type="button" className="key bg-[#e6e4e4] h-14 border border-solid border-[#cecdcd]" onClick={handlePressButton}>
          7
        </button>
        <button type="button" className="key bg-[#e6e4e4] border border-solid border-[#cecdcd]" onClick={handlePressButton}>
          8
        </button>
        <button type="button" className="key bg-[#e6e4e4] border border-solid border-[#cecdcd]" onClick={handlePressButton}>
          9
        </button>
        <button
          type="button"
          className="key operator bg-[#ff9832] border border-solid border-[#cecdcd]"
          onClick={handlePressButton}
        >
          x
        </button>
        <button type="button" className="key bg-[#e6e4e4] h-14 border border-solid border-[#cecdcd]" onClick={handlePressButton}>
          4
        </button>
        <button type="button" className="key bg-[#e6e4e4] border border-solid border-[#cecdcd]" onClick={handlePressButton}>
          5
        </button>
        <button type="button" className="key bg-[#e6e4e4] border border-solid border-[#cecdcd]" onClick={handlePressButton}>
          6
        </button>
        <button
          type="button"
          className="key operator bg-[#ff9832] "
          onClick={handlePressButton}
        >
          -
        </button>
        <button type="button" className="key bg-[#e6e4e4] h-14 border border-solid border-[#cecdcd]" onClick={handlePressButton}>
          1
        </button>
        <button type="button" className="key bg-[#e6e4e4] border border-solid border-[#cecdcd]" onClick={handlePressButton}>
          2
        </button>
        <button type="button" className="key bg-[#e6e4e4] border border-solid border-[#cecdcd]" onClick={handlePressButton}>
          3
        </button>
        <button
          type="button"
          className="key operator bg-[#ff9832] border border-solid border-[#cecdcd]"
          onClick={handlePressButton}
        >
          +
        </button>
        <button
          type="button"
          className="key two-cell bg-[#e6e4e4] col-span-2 h-14 border border-solid border-[#cecdcd]"
          onClick={handlePressButton}
        >
          0
        </button>
        <button type="button" className="key bg-[#e6e4e4] border border-solid border-[#cecdcd]" onClick={handlePressButton}>
          .
        </button>
        <button
          type="button"
          className="key operator bg-[#ff9832] border border-solid border-[#cecdcd]"
          onClick={handlePressButton}
        >
          =
        </button>
      </div>

    </section>
  );
}
export default Calculator;
