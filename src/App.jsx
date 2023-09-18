import {  useState } from 'react'

import './App.css'
import paragraphs  from './data'








function App() {

  const[data,setData]=useState([])
  const[count,setCount]=useState(0)

  const handleSubmit=(e)=>{
    e.preventDefault()
    const amount=parseInt(count)
    if (count>12) {
      amount=12
      
    }    
    if (count<0) {
      amount= 1
      
    }
    setData(paragraphs.slice(0,amount))
    

  }


  return (
    <>
      
 
<main>
  <div className="container">
    <h1 className='
    title'>Instead Of Lorem</h1>
    <div className="form-section">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="count">Paragraphs</label>
        <input type="number" id='amount' onChange={(e)=>{setCount(e.target.value)

        }} value={count} />
        <button type="submit">Generate</button>
      </form>

      {data.map((item,index)=>{
        

        return <article className='para' key={index}>{item}</article>
      })}
    </div>
  </div>
</main>
      
    </>
  )
}

export default App
