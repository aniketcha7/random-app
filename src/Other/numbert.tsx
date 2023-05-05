import React ,{useState} from 'react'

function NumberT(){
    const [age,setage] = useState(0)

    const agechange =() =>{
        setage(age + 1)
    }

    return(
     <div>
        <h3> i am {age} years old</h3>
       <button onClick = {agechange}> + </button>

     </div>
    )
}

export default NumberT;