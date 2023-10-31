// import { useRef } from "react";
// const UseRef = () => {
//     const demo = useRef()
//     const handle = ()=>{
//         demo.current.innerHTML = "<ul><li>a</li><li>b</li></ul>"
//     }
//     return (
//         <div>
//             <h1 ref={demo} ></h1>
//             <button onClick={handle} >click</button>
//         </div>
//     );
// };

import { useRef } from "react";

// export default UseRef;

const UseRef = () => {
    let demo = useRef()
    const handle = () =>{
        demo.innerHTML = "<ul><li>a</li><li>b</li></ul>"
    }
    return (
        <div>
            <h1 ref={(h1)=>demo=h1} ></h1>
            <button onClick={handle} >click</button>
        </div>
    );
};

export default UseRef;