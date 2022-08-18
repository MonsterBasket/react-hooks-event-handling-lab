function EyesOnMe(){

    function eClick(e){
        console.log("Memento Mori!");
    }
    function eFocus(e){
        console.log("Good!");
    }
    function eBlur(e){
        console.log("Hey! Eyes on me!");
    }

    return <button onClick={eClick} onFocus={eFocus} onBlur={eBlur}>Eyes on me</button>

}

export default EyesOnMe;