import React from 'react';
import MyContext from './Context';


export default function DemoChild() {
    console.log('Demo child Render');
    const val = useContext(MyContext);
    console.log(val);
    return (
        <div>
            
        </div>
    )
}

export default DemoChild
