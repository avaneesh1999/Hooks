import React,{useState} from 'react'

export default function Counter() {
    const[count,setcount]=useState(0);

    const incremenet=()=>{
        setcount(count+1);
    }

    const deccremenet=()=>{
        setcount(count-1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incremenet}>+</button>
            <button onClick={deccremenet}>-</button>
            
        </div>
    )
}
