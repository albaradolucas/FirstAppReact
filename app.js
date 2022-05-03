const $app = document.getElementById('app');
const useState = React.useState;

function Contador() {
    const [contadorValue, actualizarContador] = useState(0);
    const [contadorVeces, actualizarVeces] = useState(0);

    return (
        <div>
            <span>{contadorValue}</span>
            <button
            onClick={() => {
                actualizarContador(contadorValue + 1);
                actualizarVeces(contadorVeces + 1);
            }}> Incremetar + 
            </button>

            <button
            onClick={() => {
                actualizarContador(contadorValue - 1);
                actualizarVeces(contadorVeces + 1);
            }}> Decrementar -{" "} 
            </button>
            <p>Veces utilizado: {contadorVeces}</p>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Contador />
    </div>, $app
);