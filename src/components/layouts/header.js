import React from 'react'

// Logo
import Logo from './logo'

const Header = (props) => {
    if (props.position === 'home') {
        return (
            <header>
                Home
                <Logo/>
            </header>
        )

    } else {
        return (
            <header>
                <Logo/>
            </header>
        )
    }
};

export default Header