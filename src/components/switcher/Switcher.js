import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DIV } from './styledSwitcher'
import usePersisterThemeHook from '../../hooks/persisterTheme'
import light from '../../theme/light';
import dark from '../../theme/dark';


const Switcher = () => {
    const [theme, setTheme] = usePersisterThemeHook("theme", light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <DIV className='switcher'>
            <input type='checkbox' className='inputSwitcher' onChange={toggleTheme} />
        </DIV>
    )
}

export default Switcher
