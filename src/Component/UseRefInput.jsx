// import { useRef } from "react";

import { useRef } from "react";


// const UseRefInput = () => {
//     let firstName = useRef()
//     let lastName = useRef()
//     let mobileNumber = useRef();
//     const handleButton = () =>{
//         let fName = firstName.current.value;
//         let lName = lastName.current.value
//         let mobile = mobileNumber.current.value
//         alert(fName + " " + lName + " " + mobile)
//     }
//     return (
//         <div>
//             <input type="text" ref={firstName} />
//             <input type="text" ref={lastName} />
//             <input type="number" name="" ref={mobileNumber} id="" />
//             <button onClick={handleButton} >click</button>
//         </div>
//     );
// };

// export default UseRefInput;



const UseRefInput = () => {
    let firstName,lastName,mobileNumber = useRef()
    const handleButton = () =>{
        let fName = firstName.value;
        let lName = lastName.value;
        let mobile = mobileNumber.value
        alert(fName + " " + lName + " " + mobile)
    }
    return (
        <div>
            <input type="text" ref={(a)=> firstName = a } />
            <input type="text" ref={(b)=>lastName=b} />
            <input type="text" ref={(c)=>mobileNumber=c} />
            <button onClick={handleButton} >click</button>
        </div>
    );
};

export default UseRefInput;