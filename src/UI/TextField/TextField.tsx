import { useContext, useState } from "react"
import styles from './TextField.module.scss'
import Button from "../Button/Button"
import { ThemeContext, themes_Name } from "../../utils/types"
const TextField = ({setTheme, children }: any) => {
	const theme = useContext(ThemeContext)
	const nextThemeIndex = (currentThemeIndex: number) =>
		(currentThemeIndex + 1) % themes_Name.length;
	const changeTheme = (event: any) => {
		const nextTheme = themes_Name[nextThemeIndex(themes_Name.indexOf(theme))]
		console.log(theme)
		setTheme(nextTheme)
	}
	return (
		<div className={styles.textField}>
			<div className={styles.space}>
				<div className={styles.number}>{children}</div>
			</div>
			<div className={styles.themesField}>
				<Button className={styles.button} onClick={changeTheme}>T</Button>
			</div>
		</div>
	)
}
export default TextField