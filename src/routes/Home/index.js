import React from 'react'

// Components
import {Header, Footer, Slider} from './../../components/layouts'
import Body from './../../components/layouts/body'

class Home extends React.Component {
    render() {
        return (
           <main>
               <Header/>
               <Slider/>
               <Body/>
               <Footer/>
           </main>
        )
    }
}

export default Home