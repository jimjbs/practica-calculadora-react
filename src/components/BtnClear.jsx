import '../styleSheets/BtnClear.css'

const BtnClear = ({children, resetearCalc}) => {
    return (
        <div className="btn-clear"
        onClick={resetearCalc}
        >
            {children}
        </div>
    )
}

export default BtnClear