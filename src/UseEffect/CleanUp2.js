import React,{useState,useEffect} from 'react'

export default function CleanUp2() {
    const[count,setCount]=useState(0);
    console.log('RENDER');

    useEffect(()=>{
        console.log('USEEFFECT');
        document.title=`you have clicked ${count} times `

        return()=>{
            alert('IN THIS CASE IT WILL WORK AS COMPONENT DID UNMOUNT');
        }
    })


    const increment=()=>{
        setCount(count+1);
    }


    return (
        <div>
            <button onClick={increment}>CLICK</button>
            <p>YOU HAVE CLICKED {count} times</p>
            
        </div>
    )
}
