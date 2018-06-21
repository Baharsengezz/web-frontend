import React from 'react'

import miniAbout from './miniabout'
import miniMenu from './minimenu'
import miniBlog from './miniblog'

const Top = () =>{
    return(
        <div className='row top'>
            <miniAbout/>
            <miniMenu/>
            <miniBlog/>
        </div>
    )
};

export default Top