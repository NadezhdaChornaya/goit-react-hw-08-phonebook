import React from 'react';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import { Div } from './styledHeader';
// import Switcher from '../switcher/Switcher';


const Header = () => {
    return (
        <header className='a'>
            <Div>
                <Navigation />
                <UserMenu />
                {/* <Switcher /> */}

            </Div>
        </header>
    )
}

export default Header
