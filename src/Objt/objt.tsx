import React, { useState } from 'react'


function ObjT() {

    const [obj, setobj] = useState({ Address: "Nagpur", pincode: 441101 })

    function ChangeAdd() {
        setobj({ ...obj, Address: "Koradi", pincode: 441111 })
    }

    return (
        <div className="App2">
           <h3>
          My Address is {obj.Address} & Pincode is {obj.pincode}
          </h3>
          <button onClick = {ChangeAdd}> 
          My New Address & Pincode is 
          </button>
          
        </div>
    )
}

export default ObjT;