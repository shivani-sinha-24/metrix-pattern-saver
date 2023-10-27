import { useState } from 'react';
import './App.css';
import Cell from './components/Cell/Cell';

function App() {
  
  const cellnum = [0,1,2,3,4,5,6,7,8]

  // state to store pattern of click
  const [pattern,setPattern] = useState([])

  const reset = ()=>{
    // arrow function to reset color and pattern of click by user

    // getting all the elements with classname orange and storing them into an array
    const elements = Array.from(document.getElementsByClassName('orange'))

    // useing forEach map set the classname of each element
    elements.forEach(element=>{
      element.className = "mcell"
    })
    // reset pattern of click
    setPattern([])
  }

  return (
    <div className="App">
      <div className="matrix">
      {/*  creating 3*3 divs */}
      {
        cellnum?.map((cell,index)=><Cell
          key={index}
          cell={cell}
          pattern={pattern}
          setPattern={setPattern}
        />)
      }
      </div>
      <button onClick={()=>reset()}>Reset</button>
    </div>
  );
}

export default App;
