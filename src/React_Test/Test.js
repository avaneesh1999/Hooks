//Solution 1
// import React, { useState } from "react";

import { useContext } from "react"

// export default function () {

//     const[Profile,setprofile]=useState({
//         name:'Backbencher',
//         age:23,
//     })

//     const onNameChange=(e)=>{
//         setprofile({...Profile,name:e.target.value});
//     }

//     const onAgeChange=(e)=>{
//         setprofile({...Profile,age:e.target.value});
//     }

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           value={Profile.name}
//           onChange={onNameChange}
//         />
//         <input type="text" value={Profile.age} onChange={onAgeChange} />
//         <h2>
//           Name: {this.state.name}, Age: {this.state.age}
//         </h2>
//       </form>
//     </div>
//   );
// }


// 2.
// function Test() {

//     const[count,setCount]=useState(0);
    
//     const handlechange=()=>{
//         setCount(count+1)
//     }}

//     useEffect(() => {
//         console.log('Boom');
//     })
// }    



// 4,

// useEffect(() => {
//     console.log("Count is updated");
//     },[count]);


//9.

// useEffect(() => {
//     window.addEventListener('mousedown',handelmouse);
//     return () => {
//         window.addEventListener('mousemove',handelmouseProvider);
//     }
// }, []);


//10

// function Test2() {

//     let name=useContext(NameContext);
//     let age=useContext(AgeContext);

//     let  
//     return (
//     <div>
//       {name}{age}
//     </div>
//     )
//    }
//    export default Test2


