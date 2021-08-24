import React, { useState } from 'react';
import './Calculator/Calculator.css';
const Calculator = () => {
const [value, setValue] = useState(0);
// const [valueList, setValueList] = useState<string[]>([]);
const [store, setStore] = useState(0);
const [cal, setCal] = useState(0);
// console.log("value",...valueList);
// console.log("Store",store);
console.log("result ",cal )
const isClear = (): void => {
    setValue(0);
}

const handleInput  = (userInput : number) : void =>{
setValue(parseInt(value.toString()+userInput.toString()));
}
const handleCal = () => {
    console.log(cal)
    setStore(0);
    setValue(cal);
}
const handlePlus = () =>{
    setValue(0);
    setStore(value + store);
    setCal(store+value);
}
const handleMinus = () =>{
    setValue(0);
    setStore(store - value);
    setCal(store-value);
}
const handleMul = () =>{
    setValue(0);
    setStore(store * value);
    setCal(store*value);
}
const handleDiv = () =>{
    setValue(0);
    setStore(store / value);
    setCal(store/value);
}

    return (
        <div className="calculator">
            <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))}  name="" id="" />
            <div className="calculator-buttons">
                <button className="calc-button is-clear" onClick={isClear}>C</button>
                <button className="calc-button" onClick={(event: React.MouseEvent<HTMLElement>) =>handleDiv()}>&divide;</button>
                <button className="calc-button" onClick={(event: React.MouseEvent<HTMLElement>) =>handleInput(7)}>7</button>
                <button className="calc-button" onClick={(event: React.MouseEvent<HTMLElement>) =>handleInput(8)}>8</button>
                <button className="calc-button" onClick={(event: React.MouseEvent<HTMLElement>) =>handleInput(9)}>9</button>
                <button className="calc-button" onClick={(event: React.MouseEvent<HTMLElement>) =>handleMul()}>&times;</button>

                <button className="calc-button" onClick={(event: React.MouseEvent<HTMLElement>) =>handleInput(4)}>4</button>
                <button className="calc-button" onClick={(event: React.MouseEvent<HTMLElement>) =>handleInput(5)}>5</button>
                <button className="calc-button" onClick={(event: React.MouseEvent<HTMLElement>) =>handleInput(6)}>6</button>
                <button className="calc-button" onClick={(event: React.MouseEvent<HTMLElement>) =>handleMinus()}>&minus;</button>

                <button className="calc-button" onClick={(event: React.MouseEvent<HTMLElement>) =>handleInput(1)}>1</button>
                <button className="calc-button" onClick={(event: React.MouseEvent<HTMLElement>) =>handleInput(2)}>2</button>
                <button className="calc-button" onClick={(event: React.MouseEvent<HTMLElement>) =>handleInput(3)}>3</button>
                <button className="calc-button" onClick={(event: React.MouseEvent<HTMLElement>) =>handlePlus()}> + </button>

                <button className="calc-button is-zero">0</button>
                <button className="calc-button is-equals" onClick={(event: React.MouseEvent<HTMLElement>) => handleCal()}> = </button>
            </div>
        </div>
    );
};

export default Calculator;