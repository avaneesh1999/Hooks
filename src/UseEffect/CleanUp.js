import React,{useState,useEffect} from 'react'

export default function CleanUp() {

    const[count,setCount]=useState(0);
    console.log("render");

    useEffect(()=>{
        console.log('USEEFFECT');
        document.title=`Clicked ${count} times`;

        //cleanUp

        return()=>{
            alert( `RUNS AFTER SECOND USEEFFECT IS INVOKED' ${count}` )

        }
    })

    const handleincrenment=()=>{
        setCount(count+1);
    }


    return (
        <div>

            <button onClick={handleincrenment}>CLICK</button>
            <h1>YOU  HAV CLICKED THE BUTTON {count} TIMES</h1>
            
        </div>
    )
}
