import React from 'react'
import '../Home/home.css'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Footer from '../../Components/Footer/Footer'
import ImageCarousel from '../../Components/Carrousel/Carrousel'
import {Outlet} from 'react-router-dom'


const Home = () => {
    return (
            <div className='AppMytiHome'>
            <Outlet/>
            <Header/>
            
            <main>
               <Hero/>

            <ImageCarousel />
            
            </main>
           <Footer/>
           </div>
    )
}

export default Home