import { useRef } from "react";

const CachingExpensive = () => {
    const apiData = useRef(null)
    const showDataApi = useRef()
    const fetchData = async () =>{
        let result = await  fetch("https://dummyjson.com/products")
        apiData.current = await result.json()
    }
    const showData = () =>{
        showDataApi.current.innerHTML = JSON.stringify(apiData.current)
    }
    return (
        <div>
            <h1 ref={showDataApi} ></h1>
            <button onClick={fetchData} >fetchData</button>
            <button onClick={showData} >showData</button>
        </div>
    );
};

export default CachingExpensive;

// import { useRef } from 'react';

// const CachingExpensive = () => {
//     let apiData = useRef(null);
//     let showApiData = useRef()
//     const fetchData = async ()=>{
//         let result = await fetch("https://dummyjson.com/products")
//         apiData.current = await result.json()
//     }
//     const showData = () =>{
//         showApiData.innerText = JSON.stringify(apiData.current)
//     }
//     return (
//         <div>
//             <p ref={(d)=> showApiData=d} ></p>
//             <button onClick={fetchData} >fetchData</button>
//             <button onClick={showData} >showData</button>
//         </div>
//     );
// };

// export default CachingExpensive;