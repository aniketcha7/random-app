import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [details, setdetails] = useState("Aniket")
  function updatedetails() 
  {
    setdetails("chachane")  
  }
  
  return (
    <div className="App">
     {details}
     <br/>
     <br/>
     <button onClick={updatedetails}>
      Tap To See My Sur Name =
     </button>

    </div>
  )
}


export default App;
