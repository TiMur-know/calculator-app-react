import { createContext } from "react"

export type Theme='default'|'dark'|'light'
export const themes_Name=['default', 'dark', 'light']
export const ThemeContext=createContext<Theme>('default')
