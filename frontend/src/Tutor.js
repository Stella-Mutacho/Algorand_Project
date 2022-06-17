import React from "react";
import logo from "./logo.svg"
function Tutor() {
    return (
        <div>

            <label> Full Name:  </label>
            <input class='input' type="text" placeholder="Name" /> <br />
            <small class='small'> Your full name please </small>
            <br /><br />
            <label> Unit Name:  </label>
            <input class='input' name="phone" type="text" placeholder="Unit Name" /> <br />
            <small class='small'> The unit name of assets </small> <br /><br />'
            <label> Description: </label>
            <input className='in' type="text" placeholder="Description" /> <br />
            <small class='small'> description of this asset </small> <br /><br />'
            <button id='button'> Generate Certificates </button>' <br /> <br />
            <button id='button'> Show Extra </button>'
            <h1>Approve certificate</h1>
        </div>
    );

}
export default Tutor;