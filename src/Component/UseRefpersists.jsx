import { useRef } from "react";


const UseRefpersists = () => {
    const number = useRef(0)
    let demoFun = () =>{
        number.current++
        console.log(number.current)
    }
    return (
        <div>
            <button onClick={demoFun} >click</button>
        </div>
    );
};

export default UseRefpersists;