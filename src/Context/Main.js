import React from 'react'
import MyContext from './Context';
import Demo from './Demo';

export default function Main() {
    console.log('Render');
    const[count,setCount] = useState(0);
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
            <MyContext.Provider value ={count}>
                <Demo/>
                </MyContext.Provider>
        </div>
    )
}
