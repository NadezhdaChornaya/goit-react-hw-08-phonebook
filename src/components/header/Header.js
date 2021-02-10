import React from 'react';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import { Div } from './styledHeader';


const Header = () => {
    return (
        <Div>
            <Navigation />
            <UserMenu />
        </Div>
    )
}

export default Header
