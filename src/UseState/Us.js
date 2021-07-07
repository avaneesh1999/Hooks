// import React,{useState} from 'react'

// export default function Us() {
//     const [msgObj,setMessage]=useState({message:'',id:1});
//     const handleChange=(e)=>{
//         let val=e.target.value;
//         let obj ={...msgObj,message:val};
//         setMessage(obj);

//     }

//     return (
//         <div>
//             <input type='text' value={msgObj.message}  onChange={handleChange}></input>
//             <p>{msgObj.message}</p>
            
//         </div>
//     )
// }


import React,{useState}from 'react'

export default function Us() {
    const[msgObj,setMessage]=useState({msg:'',id:1});

    const handleChange=(e)=>{
        let val=e.target.value;

        //REACT COMPARES THE ADDRESSES OF NEW CHANGE AND OLD CHANGE AND SHOWS ONLY WHEN THERE IS DIFFRENCE IN ADDRESSES
        // msgObj.msg=val;
        // setMessage({msgObj});
        
        let obj={...msgObj,msg:val};
        setMessage(obj);



    }
    return (
        <div>
            <input type='text' value={msgObj.msg}  onChange={handleChange}></input>
            <p>{msgObj.msg}</p>
            
        </div>
    )
}

