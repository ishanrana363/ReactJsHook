import { useRef } from "react";

const UseRefCSS = () => {
    let demo = useRef();
    let handleDemo = () =>{
        demo.current.classList.remove('text-success')
        demo.current.classList.add("text-primary")
    }
    let demo1 = useRef()
    let handleButton2 = () =>{
        demo1.current.classList.remove("text-danger")
        demo1.current.classList.add("text-success")
    }
    return (
        <div>
            <h1 className="text-success" ref={demo} >This is headline</h1>
            <button onClick={handleDemo} >click</button>
            <div>
                <h1 className="text-danger" ref={demo1} >Hello programmer</h1>
                <button onClick={handleButton2} >click</button>
            </div>
        </div>
    );
};

export default UseRefCSS;