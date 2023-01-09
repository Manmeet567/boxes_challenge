import React, { useState } from 'react'

export default function Box(props) {

    // const [on,setOn] = useState(props.on)
    const styles = {
        backgroundColor: props.on ? "black": "transparent"
    }
    

    // function toggle(){
    //     setOn(prevOn => !prevOn)
    // }

  return (
    <div style={styles} onClick={props.toggle} className="box">

    </div>
  )
}
