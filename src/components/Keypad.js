// Code Keypad Component Here
import React from "react"

function Keypad (){
    function changer(){
        console.log("Entering password...")
    }
    return (
        <form>
            <input type="password" onChange={changer}/>
        </form>
    )
}
export default Keypad