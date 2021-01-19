import React from "react"

const Scroll=(props)=>{
    return (
    <div style={{height:"600px",overflowY:"scroll",border:"3px black solid"}}
     >{props.children}</div>
    )
};

export default Scroll