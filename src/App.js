import React, { useEffect, useState } from 'react'
import './App.css'
import Hello from './Hello'

const App = () => {

  const [num,setNum]=useState(0)
  const [nums,setNums]=useState(0)


  useEffect(()=>{
    alert('iam cilciked')
  }, [nums]);
  return (
    <div className='App'>
    <Hello/>
      <h1>Useeffect {num}</h1>
      <button onClick={()=>{setNum(num+1)
      }
    }
  >Click Me {num}</button>
  <br/>
      <button onClick={()=>{setNums(nums+1)
      }
    }
  >Click Me {nums}</button>
  
    </div>
  )
}

export default App 
