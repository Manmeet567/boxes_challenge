import { useState } from 'react';
import Box from './Box';
import boxes from './boxdb';

function App() {

  const [box, setBox] = useState(boxes);

  function toggle(id){
    setBox(prevBox => {
      return prevBox.map((square)=>{
        return square.id === id ? {...square,on:!square.on} : square
      })
    })
  }

  const boxElements = box.map((box) => (
    <Box key={box.id} on={box.on} toggle={()=>toggle(box.id)}/>
  ))

  return (
    <div className="App">
      {boxElements}
    </div>
  );
}

export default App;
