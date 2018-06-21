import React from 'react'

import MiniAbout from './miniabout'
import MiniMenu from './minimenu'
import MiniBlog from './miniblog'

const Top = () =>{
    return(
        <div className='row top'>
            <MiniAbout/>
            <MiniMenu/>
            <MiniBlog/>
        </div>
    )
};

export default Top