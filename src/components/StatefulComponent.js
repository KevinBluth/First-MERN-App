import React, { useState } from "react";
const MyButton = () => {
    const [count, setCount] = useState(0);
    const [x,y] = useState("this is x")
    const handleClick = e => {
        e.preventDefault();
        setCount(count + 1)
        y("this is a new x")
    }

    return(
        <div>
            Clicks:{count}
            <button onClick={handleClick}>Click Me</button>
            {x}
        </div>
    );
}

export default MyButton;