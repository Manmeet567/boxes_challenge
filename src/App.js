import { useState } from 'react';
import Box from './Box';
import boxes from './boxdb';

function App() {

  const [box, setBox] = useState(boxes);


  const boxElements = box.map((box) => (
    <Box key={box.id} on={box.on}/>
  ))

  return (
    <div className="App">
      {boxElements}
    </div>
  );
}

export default App;
