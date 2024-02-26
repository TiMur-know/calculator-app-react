import React, { useState} from 'react';
import Plain from "./components/Plain/Plain";
import { Theme, ThemeContext } from './utils/types';

function App() {

const [theme,setTheme]=useState<Theme>('default')
const changeThemeState=(theme:Theme)=>{
  setTheme(theme)
}
  return (
      <ThemeContext.Provider value={theme}>
        <Plain setTheme={setTheme}/>
      </ThemeContext.Provider>
  );
}

export default App;
