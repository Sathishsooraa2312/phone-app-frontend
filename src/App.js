import './App.css';
import {useEffect, useState} from 'react';
function App() {
  const[mobiles,setMobiles]=useState([]);
useEffect(()=>{
  fetch("http://localhost:4005/mobiles")
  .then((data)=>data.json())
  .then((mbs)=>setMobiles(mbs))
}, []);
  return (
    <div className="App">
    <div className='phone-list-container'>
    {mobiles.map((mb)=>
     <Phone mobile={mb} />
     )}
    </div>
    </div>
  );
}

function Phone({mobile}){
  
  return(<>
  <div className='phone-container'>
        <h1 className='phone-name'>{mobile.model}</h1>
        <img className='phone-picture' src={mobile.img} alt={mobile.model}/>
        <h1 className='phone-company' >{mobile.company}</h1>
        </div>
  </>)
}

export default App;
