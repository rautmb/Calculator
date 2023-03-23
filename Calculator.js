import React, { useState } from 'react';
import { } from '../Calculator/style.css'

export const Calculatorproject = () => {
    const [result, setresult] = useState("");

    const clickevent = (e) => {
        setresult(result.concat(e.target.value));
    }

    const clear = () => {
        setresult('');
    }

    const calculator = () => {
        setresult(eval(result).toString());//The Eval function evaluates the string expression and returns its value. 
    }
    
    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <div className='calculator_div'>
                        <input className='calculator_operation_box' type="text" placeholder='0' value={result} />
                        <input type="button" value="9" className='btn' onClick={clickevent} />
                        <input type="button" value="8" className='btn' onClick={clickevent} />
                        <input type="button" value="7" className='btn' onClick={clickevent} />
                        <input type="button" value="6" className='btn' onClick={clickevent} />
                        <input type="button" value="5" className='btn' onClick={clickevent} />
                        <input type="button" value="4" className='btn' onClick={clickevent} />
                        <input type="button" value="3" className='btn' onClick={clickevent} />
                        <input type="button" value="2" className='btn' onClick={clickevent} />
                        <input type="button" value="1" className='btn' onClick={clickevent} />
                        <input type="button" value="0" className='btn' onClick={clickevent} />
                        <input type="button" value="." className='btn' onClick={clickevent} />
                        <input type="button" value="+" className='btn' onClick={clickevent} />
                        <input type="button" value="-" className='btn' onClick={clickevent} />
                        <input type="button" value="*" className='btn' onClick={clickevent} />
                        <input type="button" value="/" className='btn' onClick={clickevent} />
                        <input type="button" value="%" className='btn' onClick={clickevent} />
                        <input type="button" value="Clear" className='btn btn1' onClick={clear} />
                        <input type="button" value="=" className='btn btn1' onClick={calculator} />
                    </div>
                </div>
            </div>
        </>
    )
}