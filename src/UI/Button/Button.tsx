import styles from './Button.module.scss'
interface ButtonProps{
    onClick?:(event:any)=>any;
    className?:string;
    theme?:string;
    children?:any,
    type?:string
}
const Button = ({onClick,className,theme='default',children}:ButtonProps) => {
    const buttonClass=`${styles.button} ${styles[theme]} ${className||''}`
    
return(
    <button className={buttonClass} onClick={onClick} >
        {children}
    </button>
)
}
export default Button