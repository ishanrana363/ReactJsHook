import { useRef } from 'react';
const Setattribute = () => {
    const imageDemo = useRef()
    const handleButton = () =>{
        imageDemo.current.src = 'https://placehold.co/600x400/000000/FFFFFF/png'
        imageDemo.current.setAttribute("height","500px")
        imageDemo.current.setAttribute("width","600px")
    }
    return (
        <div>
            <img src="https://placehold.co/600x400/png" alt="" ref={imageDemo} />
            <button onClick={handleButton} >click</button>
        </div>
    );
};

export default Setattribute;