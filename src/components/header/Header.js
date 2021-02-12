import React from 'react';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import { Div } from './styledHeader';


const Header = () => {
    return (
        <header className='a'>
            <Div>
                <Navigation />
                <UserMenu />

            </Div>
        </header>
    )
}

export default Header
