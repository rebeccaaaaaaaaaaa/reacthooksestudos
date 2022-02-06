function Counter() {

    let qtd = 10;

    function upQtd(){
        qtd++;
        console.log(qtd);
        document.getElementById('counterBox').innerHTML = qtd;
    }

    return(
      <>
        <h1 id="counterBox"> {qtd} </h1>
        <button onClick={upQtd}> Adicionar </button>
        <button> Diminuir </button>

        <hr />
        <hr />
        <hr />
    </>
    );
}

export default Counter;