import { useState } from "react";
import { evaluate } from 'mathjs';
import './style.css';
import Input from "./Input";
import Button from "./Button";
import Clear from "./Clear";

const Calculator = () => {
    const [input, setInput] = useState('');

    const addToInput = (value) => {
        setInput(input + value);
    } 

    const handleEqual = () => {
        setInput(evaluate(input));
    }

    const handleClear = () => {
        setInput('');
    }

    return(
        <div className="app">
            <Input value={input} />
            <div className="row">
                <Button handleClick = {addToInput}>7</Button>
                <Button handleClick = {addToInput}>8</Button>
                <Button handleClick = {addToInput}>9</Button>
                <Button handleClick = {addToInput}>/</Button>
            </div>
            <div className="row">
                <Button handleClick = {addToInput}>4</Button>
                <Button handleClick = {addToInput}>5</Button>
                <Button handleClick = {addToInput}>6</Button>
                <Button handleClick = {addToInput}>*</Button>
            </div>
            <div className="row">
                <Button handleClick = {addToInput}>1</Button>
                <Button handleClick = {addToInput}>2</Button>
                <Button handleClick = {addToInput}>3</Button>
                <Button handleClick = {addToInput}>+</Button>
            </div>
            <div className="row">
                <Button handleClick = {addToInput}>.</Button>
                <Button handleClick = {addToInput}>0</Button>
                <Button handleClick = {handleEqual}>=</Button>
                <Button handleClick = {addToInput}>-</Button>
            </div>
            <div>
                <Clear handleClear = {handleClear}/>
            </div>
        </div>
    )
}

export default Calculator;
