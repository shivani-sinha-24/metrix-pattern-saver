import React, { useRef } from 'react'
import './Cell.css'

const Cell = ({cell,pattern,setPattern}) => {

    const ref = useRef()
    
    const changeClr = (refOfElement)=>{
    // function to change the background color of div to green

        if(refOfElement.current.className!= "mcell green"){
            refOfElement.current.className = "mcell green"
            // storing the pattern of click in pattern []
            setPattern([...pattern,cell])
        }
    }


    const changeClrToGreen = ()=>{
    //  function to change clr of divs to green
        
        // get all the elements with classname green and store it into an array
        const elements = Array.from(document.getElementsByClassName('green'))

        // chaning the clr of divs according to the pattern of click by changing the classname
        let index = 0;
        const interval = setInterval(()=>{
            // using ifelse setting the classname 
            if (index < pattern.length) {
                const elementIndex = pattern[index];
                elements[elementIndex].className = "mcell orange"
                index++;
            } else {
                clearInterval(interval);
            }
        },500)
    }
    
    // when the user click on the last div,function to change div color to green is called 
    if(pattern.length==9){
        changeClrToGreen()
    }

  return (
    <div className='mcell' ref={ref} onClick={()=>changeClr(ref)}>
        {/* {cell + 1} */}
    </div>
  )
}

export default Cell
