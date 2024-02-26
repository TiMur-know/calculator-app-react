interface Theme {
    name: string,

    colors: {
        primary: string,
        secondary: string,
        display: string,
        displayBorder: string,

        memoryButton: string,
        operators: string,
        additionalOperators: string,
        numbers: string,
        calculate: string
    }
}
export const themes: Theme[] = [
    {
        name: "Default",
        colors: {
            primary: '#ffffff',
            secondary: '#cccccc',
            display: '#f0f0f0',
            displayBorder: '#999999',
            memoryButton: '#00ffff',
            operators: '#ff00ff',
            additionalOperators: '#ffff00',
            numbers: '#00ff00',
            calculate: '#ff0000'
        }
    },
    {
        name: "Ligth",
        colors: {
            primary: '#ffffff',
            secondary: '#cccccc',
            display: '#f0f0f0',
            displayBorder: '#999999',
            memoryButton: '#00ffff',
            operators: '#ff00ff',
            additionalOperators: '#ffff00',
            numbers: '#00ff00',
            calculate: '#ff0000'
        }
    },
    {
        name: "Dark",
        colors: {
            primary: '#000000',
            secondary: '#333333',
            
            display: '#444444',
            displayBorder: '#666666',

            memoryButton: '#006666',
            operators: '#660066',
            additionalOperators: '#666600',
            numbers: '#006600',
            calculate: '#660000'
        }
    },
]