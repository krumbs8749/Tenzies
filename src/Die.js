import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    const dieStyle = "die-face n" + props.value;
    const dots = new Array(props.value)
                    .fill("")
                    .map((val, index) => {
                        return (<span key={index} className="dot"></span>)
                    })
    return (
        <div 
            className={dieStyle} 
            style={styles}
            onClick={props.holdDice}
        >
            {dots}
        </div>
    )
}