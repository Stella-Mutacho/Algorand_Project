import React from "react";
import './App.css';
function Trainee() {
    return (
        <div>
            <h1> 10 Academy   trainee page</h1>
            <h1>Request for certificate</h1>

            <label> Full Name:  </label>
            <input class='input' type="text" placeholder="Name" /> <br />
            <small class='small'> Your full name please </small>
            <br /><br />
            <label> Asset:  </label>
            <input class='input' name="phone" type="text" placeholder="Unit Name" /> <br />
            <small class='small'> The unit name of assets </small> <br /><br />'
            <label> Description: </label>
            <input className='in' type="text" placeholder="Description" /> <br />
            <small class='small'> Asset </small> <br /><br />'
            <button id='button'> Request Certificate </button>' <br /> <br />
            <button id='button'> Download certificate </button>'
        </div>
    );

}
export default Trainee;