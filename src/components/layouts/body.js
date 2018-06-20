import React from 'react'

import Lectures from './lectures'
import Events from './events'
import Blog from './blog'

const Body = () =>{
    return(
        <div className="container-fluid">
            <Lectures/>
            <Events/>
            <Blog/>
        </div>
    )
};

export default Body