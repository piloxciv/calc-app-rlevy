/* eslint no-eval: 0 */
import React, { useState } from 'react'
import words from 'lodash.words';
import Functions from './components/Functions';
import Numbers from './components/Numbers';
import Result from './components/Result'
import MathOperations from './components/MathOperations';
import './App.css';

const App = () => { 

    const [stack, setStack] = useState("");
    
    const items = words(stack, /[^-^+^*^/]+/g)

    const value = items.length > 0 ? items[items.length-1] : "0";

    return (
        <main className='react-calculator'>
        <Result value={value}/>
        <Numbers onClickNumber={number => {
        setStack(`${stack}${number}`)
        }}/>
        <Functions 
        onContentClear={() => {
            if(stack.length > 0){setStack('')}
            }}
        onDelete={() => {
            if(stack.length > 0){
                const newStack = stack.substring(0, stack.length - 1)
                setStack(newStack)}
             }}
        />
        <MathOperations 
        onClickOperation={operation =>{
            if(stack.length > 0){setStack(`${stack}${operation}`)}
         }}
         onClickEqual={equal => {
            if(stack.length > 0){setStack(eval(stack).toString())}
         }}
         />
    </main>)
}

export default App;