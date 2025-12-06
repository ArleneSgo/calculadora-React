import { useState } from "react"

export const CalculatorApp = () => {
    const [prevCounter, setPrevCounter] = useState('');
    const [counter, setCounter] = useState('');
    const [operator, setOperator] = useState('');

    const appendNumber = (e) => {
        if(counter === '0'){
            setCounter(e.target.value);
        }else if(e.target.value === '0'){
            setCounter('');
        }else{
            setCounter(counter + e.target.value);
        }
    }
    const handleCounterChange = (e) => {
        if(e.target.value === '0' || isNaN(e.target.value)){
            setCounter('');
        }else{
            setCounter(e.target.value);
        }
    }
    const handleOperator = (e) => {
        setOperator(e.target.value);
        setPrevCounter(counter);
        setCounter('');
        
    }
    const calculate = () => {
        let result;
        if (operator === '+') {
        result = parseFloat(prevCounter) + parseFloat(counter);
      } else if (operator === '-') {
        result = parseFloat(prevCounter) - parseFloat(counter);
      } else if (operator === '*') {
        result = parseFloat(prevCounter) * parseFloat(counter);
      } else if (operator === '/') {
        result = parseFloat(prevCounter) / parseFloat(counter);
      }
      setCounter(result);
      setOperator('');

    }
    const clear = () => {
        setCounter('');
        setPrevCounter('');
        setOperator('');
    }
  return (
    <>
    <h2>Counter={counter}</h2>
    <h2>Operator={operator}</h2>
    <h2>Prev Counter={prevCounter}</h2>
    <div className="calculator">
        <input onChange={handleCounterChange} value={counter} type="number" className="display" placeholder="0"></input>
        <div className="buttons">
            <button value={'1'} onClick={appendNumber}>1</button>
            <button value={'2'} onClick={appendNumber}>2</button>
            <button value={'3'} onClick={appendNumber}>3</button>
            <button value={'+'} onClick={handleOperator}>+</button>

            <button value={'4'} onClick={appendNumber}>4</button>
            <button value={'5'} onClick={appendNumber}>5</button>
            <button value={'6'} onClick={appendNumber}>6</button>
            <button value={'-'} onClick={handleOperator}>-</button>

            <button value={'7'} onClick={appendNumber}>7</button>
            <button value={'8'} onClick={appendNumber}>8</button>
            <button value={'9'} onClick={appendNumber}>9</button>
            <button value={'*'} onClick={handleOperator}>*</button>

            <button onClick={clear}>C</button>
            <button value={'0'} onClick={appendNumber}>0</button>
            <button value={'/'} onClick={handleOperator}>/</button>
            <button onClick={calculate} className="equals">=</button>
        </div>
    </div>
    </>
  )
}
