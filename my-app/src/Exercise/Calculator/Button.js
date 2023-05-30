const Button = ({children, handleClick}) => {
    const isOperator = (value) => {
        return !isNaN(value) || value === '.' || value === '=';
    }
    
    return(
        <div 
            className={`button-value ${isOperator(children) ? null : 'operator'}`}
            onClick={()=>handleClick(children)}
        >
            {children}
        </div>
    )
}

export default Button;