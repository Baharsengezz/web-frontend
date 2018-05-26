import React from 'react'

// Components
import {Header, Footer, Slider} from './../../components/layouts'

class Home extends React.Component {
    render() {
        return (
           <main>
               <Header/>
               <Slider/>
               <Footer/>
           </main>
        )
    }
}

export default Home