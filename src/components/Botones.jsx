import  '../styleSheets/Botones.css'

function Botones({children, manejarClic}) {

    const esOperador = (valor) => {
        return isNaN(valor) && valor != '.' && valor != '='
    }   

    return(
        <div 
        className={`btn-contenedor ${esOperador(children) ? 'operador' : ''}`.trimEnd()}
        onClick={()=> manejarClic(children)}
        >
            {children}
        </div>
    )
}

export default Botones;