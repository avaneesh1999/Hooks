import React,{useState,useEffect} from 'react'
//3rd VARIAtion
// non empty dependenct array
// the value that we pass under dependcy array useEffect runs only when that value changes

export default function Us3() {


    console.log('Render');

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
    console.log("Count is updated");
    },[count]);

    return (
    <div>
    <button onClick={() => setCount(count + 1)}>State: {count}</button>
    <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    </div>
    );
}


