import React,{useState,useEffect} from 'react'

//2nd variation of useEffect
//Works as Componenet Did Mount only
//empty dependency array is passed

export default function Ue2() {
    useEffect(() => {
       console.log("USEEFFECT");
       document.title=`${count}`;
       },[]);

    console.log('RENDER');   


    const[count,setCount]=useState(0);

    const handleChange=()=>{
        setCount(count+1);
    }
    return (
        <div>
            <button onClick={handleChange}>CLICK</button>
            <h1>YOU CLICK IT {count} times</h1>
            
        </div>
    )
}
