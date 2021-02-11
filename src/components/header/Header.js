import React from 'react';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import { Div } from './styledHeader';
import Switcher from '../switcher/Switcher';


const Header = () => {
    return (
        <Div>
            <Navigation />
            <UserMenu />
            <Switcher />
            {/* <input type='checkbox'></input> */}
        </Div>
    )
}

export default Header
