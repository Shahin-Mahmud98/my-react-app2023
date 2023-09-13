import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const singers = [
  {Name : "Salman Shah", Job : "Nayok"},
  {Name : "Sakib Khan", Job : "Nayok"},
  {Name : "Bapparaz", Job : "Nayok"},
  {Name : "Mr Kodu Mia", Job : "Villen"},
  {Name : "Mr Jobar Ali", Job : "Laptonent"},
  {Name : "Misir ALi", Job : "Character"},
  {Name : "Mutu Mia", Job : "Patlu"}
]

const bodyStyle = {
  color:"purple",
  backgroundColor:"black"
}





function App() {
  const nayoks = ['Salman Shah','Sakib Khan','Bapparaz']
  return (
    <div>

      {/* Normal dynamic component of array */}
{/* 
{
  nayoks.map(nayok => nayok)
} */}




{/* List dynamic component of array */}

{/* {
  nayoks.map(nayok => <li>Name : {nayok}</li>)
} */}


{/* Person component use kore dynamic component of array */}

{/* {
  nayoks.map(nayok => <Person name = {nayok}></Person>)
} */}


{/* Array of obect */}

{
  singers.map(singer => <Person name={singer.Name} job={singer.Job}></Person>)
}

       {/* <Person></Person>
    <Person></Person>
    <Person></Person>
    <Person></Person> */}
    {/* <Person></Person>  */}

   
    </div>
  )
}

function Person(props){
  return(
    <div className='Person'>
     <h1>Name : {props.name}</h1>
     <p>Job : {props.job}</p>
    </div>
  )
}
  


export default App







{/*  */}

//
{/* <>

    // Dynamic Content and Dynamic Style in React
    
<div>
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<div className="container">
  <h1>Hello React + Vite</h1>
</div>
<div className="container2"></div>
<p>Name : {name.Name} Job :{name.Job}</p>
<p style={bodyStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, vitae.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, vitae.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, vitae.</p>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p>
</> */}
//

