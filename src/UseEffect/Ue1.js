


import React,{useState,useEffect} from 'react'
//UseEffect 1st Variation
//Works after every render
//WORKS AS COMPONENT DID MOUNT + COMPONENT DID UPDATE
// //no optional dependency array is passed

export default function Ue1() {
  //state only made once in HOOKS
  useEffect(() => {
    console.log("UseEffect");
    document.title='Clicked ${count} times';
    
  })
  console.log('RENDER');
  const[count,setCount]=useState(0);

  const handleclick=()=>{
    setCount(count+1);
  }
  return (
    <div>
      <button onClick={handleclick}>CLICK</button>
      <p> you clicked the  button {count} times</p>
      
    </div>
  )
}

