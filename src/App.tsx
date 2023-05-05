import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import stringType1 from './stringt/stringt';
import ObjT from './Objt/objt';
import NumberT from './Other/numbert';

function App() {
  console.log("using usestate")

return(
 <div className ="App">

     <h4>****String usestate****</h4>
     {stringType1()}

     <hr/><h4>****Object Usestate****</h4>
     {ObjT()}

     <hr/>
     <h4>****Number Usestate****</h4>
     {NumberT()}

    </div>

)
}

export default App;
