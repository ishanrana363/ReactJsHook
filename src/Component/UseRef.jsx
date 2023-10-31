import { useRef } from "react";

const UseRef = () => {
    const demo = useRef()
    const handle = ()=>{
        demo.current.innerHTML = "<ul><li>a</li><li>b</li></ul>"
    }
    return (
        <div>
            <h1 ref={demo} ></h1>
            <button onClick={handle} >click</button>
        </div>
    );
};

export default UseRef;