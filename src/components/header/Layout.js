import React from 'react'
import Header from './Header'
import { ThemeProvider } from 'styled-components'
import usePersisterThemeHook from '../../hooks/persisterTheme';
import dark from '../../theme/dark';
import light from '../../theme/light';
import { DIV } from './styledSwitcher';
import GlobalStyle from '../../theme/GlobalStyle';



const Layout = ({ children }) => {
    const [theme, setTheme] = usePersisterThemeHook("theme", light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };
    return (
        <div>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <DIV>
                    <input type='checkbox' className='inputSwitcher' onChange={toggleTheme} />
                </DIV>
                {children}
            </ThemeProvider>
        </div>
    )
}

export default Layout