import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUP from '../SignUP';

// import Policy from '../TermsAndConditions/Policy';
// import Legal from '../TermsAndConditions/Legal';
// import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';
// import SignUP from '../SignUP'

const Home = lazy(() => import('../Home/Home'));
const Services = lazy(() => import('../Services/Services'));
const Pricing = lazy(() => import('../Pricing/Pricing'));
const AboutUs = lazy(() => import('../AboutUs/AboutUs'));
const Contact = lazy(() => import('../Contact/Contact'));
const ErrorPage = lazy(() => import('../ErrorPage'));
const Legal = lazy(() => import('../TermsAndConditions/Legal'))
const Policy = lazy(() => import('../TermsAndConditions/Policy'))
const TermsAndConditions = lazy(() => import('../TermsAndConditions/TermsAndConditions'))

function View() {
    return (
        <div className='p-2'>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='#' Component={Home} />
                    <Route path='/home' Component={Home} />

                    <Route path='/services' Component={Services} />
                    <Route path='/pricing' Component={Pricing} />
                    <Route path='/about-us' Component={AboutUs} />
                    <Route path='/contact' Component={Contact} />
                    <Route path='/signUp' Component={SignUP} />

                    <Route path='/terms-conditions' Component={TermsAndConditions} />
                    <Route path='/legal' Component={Legal} />
                    <Route path='/policy' Component={Policy} />

                    {/* Route Not Found */}
                    <Route path='*' Component={ErrorPage} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default View