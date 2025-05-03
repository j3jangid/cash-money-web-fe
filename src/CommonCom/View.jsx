import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Services from '../Services/Services'
import Pricing from '../Pricing/Pricing'
import AboutUs from '../AboutUs/AboutUs'
import Contact from '../Contact/Contact'
import ErrorPage from '../ErrorPage'
// import SignUP from '../SignUP'

function View() {
    return (
        <div className='p-2'>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='#' Component={Home} />
                <Route path='/home' Component={Home} />

                <Route path='/services' Component={Services} />
                <Route path='/pricing' Component={Pricing} />
                <Route path='/about-us' Component={AboutUs} />
                <Route path='/contact' Component={Contact} />
                {/* <Route path='/signUp' Component={SignUP} /> */}

                {/* Route Not Found */}
                <Route path='*' Component={ErrorPage} />
            </Routes>
        </div>
    )
}

export default View