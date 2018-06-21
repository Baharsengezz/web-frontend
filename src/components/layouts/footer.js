import React from 'react'

import Top from './top'
import Bottom from './bottom'

const Footer = () =>{
    return(
        <footer>
            <div className="container-fluid">
                <Top/>
                <Bottom/>
            </div>
        </footer>
    )
};

export default Footer