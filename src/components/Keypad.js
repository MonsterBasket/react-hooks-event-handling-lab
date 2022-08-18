function Keypad(){

    function handleChange(e){
        console.log("Entering password...")
    }

    return <input type="password" onChange={handleChange} placeholder="Enter Password"></input>
}

export default Keypad;