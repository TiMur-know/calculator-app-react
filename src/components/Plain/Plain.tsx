import { useContext, useState } from "react"
import Button from "../../UI/Button/Button"
import styles from './Plain.module.scss'
import TextField from "../../UI/TextField/TextField"
import { ThemeContext } from "../../utils/types";
interface Calculator {
    firstNumerator: number | null;
    secondNumerator: number | null;
    operator: string;
    value: string;
    historyValue: string | null
}
const Plain = ({setTheme}:any) => {
    const theme=useContext(ThemeContext)
    const [state, setState] = useState<Calculator>({
        firstNumerator: null,
        secondNumerator: null,
        operator: "",
        value: "0",
        historyValue: null
    })
    const handleNumberClick = (event: any) => {
        const num: string = event.target.innerText
        console.log(state)
        setState((prevState) => ({
            ...prevState,
            value: state.value === "0" || state.historyValue ? num : prevState.value + num
        }));
        if (state.historyValue) {
            setState((prevState) => ({
                ...prevState,
                historyValue: null
            }));
        }
    }
    const handleOperatorClick = (event: any) => {
        const op: string = event.target.innerText
        console.log(state)
        setState((prevState) => ({
            ...prevState,
            firstNumerator: Number(prevState.value),
            operator:op,
            secondNumerator: null,
            historyValue: prevState.value
        }));
    }
    const handleClick = (event: any) => {
        const item: string = event.target.innerText
        console.log(state)

        if (item === 'C') {
            setState({
                ...state,
                firstNumerator: 0,
                secondNumerator: null,
                operator: '',
                value: '0',
                historyValue: null
            })
        }
        else if (item === '.') {
            if (!state.value.includes(".")) {
                setState({
                    ...state,
                    value: state.value + ".",
                });
            }
        }
        else if (item === 'CE') {
            setState({
                ...state,
                value: '0'
            })
        }
        else if (item === '√') {
            setState({
                ...state,
                value: String(calculateSquareRoot(state.value))
            })
        }
        else if (item === '%') {
            setState({
                ...state,
                value: String(calculatePercentage(state.value))
            })
        }
        else if (item === '=') {
            const result = calculate()
            setState({
                ...state,
                value: String(result)
            })
        }

    }
    const calculate = () => {
        console.log(state)
        const firstNum = Number(state.firstNumerator)
        const secondNum = Number(state.value)
        switch (state.operator) {
            case '+':
                return firstNum + secondNum;
            case '-':
                return firstNum - secondNum;
            case '*':
                return firstNum * secondNum;
            case '/':
                return secondNum !== 0 ? firstNum / secondNum : "Cannot divide by zero"
            default:
                return 0;
        }
    }
    const calculateSquareRoot = (num: string) => {
        const number = Number(num)
        if (number >= 0) {
            return Math.sqrt(number);
        } else {
            return "Cannot calculate square root of a negative number";
        }
    }
    const calculatePercentage = (num: string) => {
        return Number(num)
    }
    console.log(theme)
    return (
        <div className={styles.calculator}>
            <TextField setTheme={setTheme}>{state.value}</TextField>
            <div className={styles.plain}>
                <div className={styles.row}>
                    <Button className="additionalOperators" onClick={handleClick}>&radic;</Button>
                    <Button className="additionalOperators" onClick={handleClick}>%</Button>
                    <Button className="additionalOperators" onClick={handleClick}>CE</Button>
                    <Button className="additionalOperators" onClick={handleClick}>C</Button>
                </div>
                <div className={styles.row}>
                    <Button className="numbers" onClick={handleNumberClick}>7</Button>
                    <Button className="numbers" onClick={handleNumberClick}>8</Button>
                    <Button className="numbers" onClick={handleNumberClick}>9</Button>
                    <Button type="numbers" onClick={handleOperatorClick}>/</Button>
                </div>
                <div className={styles.row}>

                    <Button className="numbers" onClick={handleNumberClick}>4</Button>
                    <Button className="numbers" onClick={handleNumberClick}>5</Button>
                    <Button className="numbers" onClick={handleNumberClick}>6</Button>
                    <Button type="numbers" onClick={handleOperatorClick}>*</Button>
                </div>
                <div className={styles.row}>

                    <Button className="numbers" onClick={handleNumberClick}>1</Button>
                    <Button className="numbers" onClick={handleNumberClick}>2</Button>
                    <Button className="numbers" onClick={handleNumberClick}>3</Button>
                    <Button type="numbers" onClick={handleOperatorClick}>-</Button>
                </div>
                <div className={styles.row}>

                    <Button type="numbers" onClick={handleNumberClick}>0</Button>
                    <Button type="numbers" onClick={handleClick}>.</Button>
                    <Button type="numbers" onClick={handleClick}>=</Button>
                    <Button type="numbers" onClick={handleOperatorClick}>+</Button>
                </div>
            </div>
        </div>
    )
}
export default Plain
