import React from 'react'

// Logo
import Logo from './logo'
// nav
import Nav from './navbar'


const Header = (props) => {
    if (props.position === 'home') {
        return (
            <header>
                <Logo/>
                <Nav/>
            </header>
        )

    } else {
        return (
            <header>
                <Logo/>
                <Nav/>
            </header>
        )
    }
};

export default Header