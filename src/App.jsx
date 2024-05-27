import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState('#fff');
  
  return (
    <>
      <div className='w-full h-screen duration-200 border-cyan-300' 
      style={{backgroundColor : color}}
      >
       
        <div className='fixed flex flex-wrap bottom-48 justify-center gap-3 bg-white px-3 py-2 rounded-3xl' >
          <button onClick={() => setcolor( '#9400d3')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : '#9400d3'}}>Violet</button> 
          <button onClick={() => setcolor( '#4B0082')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : '#4B0082'}}>Indigo</button> 
          <button onClick={() => setcolor( '#0000ff')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : '#0000FF'}}>Blue</button> 
          <button onClick={() => setcolor( '#00FF00')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : '#00FF00'}}>Green</button>
          <button onClick={() => setcolor( '#FFFF00')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor : '#FFFF00'}}>Yellow</button> 
          <button onClick={() => setcolor( '#FF7F00')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : '#FF7F00'}}>Orange</button> 
          <button onClick={() => setcolor( '#FF0000')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : '#FF0000'}}>Red</button>  
        </div> 
      </div>
    </>
  )
}

export default App
