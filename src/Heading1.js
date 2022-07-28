import React from "react";

const Heading1=(props)=>{
    const {text}=props

    return(
        <div>
            <h1 className="display-3 mb-3" >{text}</h1>
        </div>
    )
}

export default Heading1