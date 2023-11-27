import { useState, useCallback, useEffect, useRef } from 'react'


function Calculator()
{
  const [exp, setExp] = useState("")
  const [prevExp,setprevExp] = useState("")

  const setprevious = ()=>{
    setprevExp(exp)
  }
  const isOperator = (expression)=>{

    if(expression==='x' || expression==='/' || expression==='-' || expression==='+')
    return true

    return false
  }
    return (
        <div className="main">
        <div className="calculator">
          <div className="screen">
            <div className="screen-last" id="lastOperationScreen">{prevExp}</div>
            <div className="screen-current" id="currentOperationScreen">{exp}</div>
          </div>
          <div className="buttons-grid" onClick={(e)=>{
             

            if(e.target.className==="buttons-grid") return

            if(e.target.id==="equalsBtn")  return setExp((prev)=> {
              let expr = prev.replace(/x/g, '*')
              let res = eval(expr).toString()
              setprevExp(res)
              return res
                
            })
            
            if(e.target.id==="deleteBtn") return setExp(prev=> prev.slice(0, -1))
              
            
            if(e.target.id==="clearBtn")  {
              setExp("")
            setprevExp("")
              return
            }
           
            let val = e.target.textContent

            if(isOperator(exp[exp.length-1]) && isOperator(val)) return 

              setExp(prev => prev+val)
          }}>
            <button className="btn btn-red span-2" id="clearBtn">
              CLEAR
            </button>
            <button className="btn btn-blue span-2" id="deleteBtn">
              DELETE
            </button>
            <button className="btn" data-number>7</button>
            <button className="btn" data-number>8</button>
            <button className="btn" data-number>9</button>
            <button className="btn" data-operator>/</button>
  
            <button className="btn" data-number>4</button>
            <button className="btn" data-number>5</button>
            <button className="btn" data-number>6</button>
            <button className="btn" data-operator>x</button>
  
            <button className="btn" data-number>1</button>
            <button className="btn" data-number>2</button>
            <button className="btn" data-number>3</button>
            <button className="btn" data-operator>-</button>
  
            <button className="btn" data-number>(</button>
            <button className="btn" data-number>)</button>
  
            <button className="btn" id="pointBtn">.</button>
            <button className="btn" data-number>0</button>
            <button className="btn" id="equalsBtn">=</button>
            <button className="btn" data-operator>+</button>
          </div>
        </div>
      </div>
    )
}

export default Calculator