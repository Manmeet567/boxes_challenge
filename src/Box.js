import React, { useState } from 'react'

export default function Box(props) {

    const [on,setOn] = useState(props.on)
    const styles = {
        backgroundColor: on ? "black": "transparent"
    }
    

    function toggle(){
        setOn(prevOn => !prevOn)
    }

  return (
    <div style={styles} onClick={toggle} className="box">

    </div>
  )
}
