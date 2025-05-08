// import { Paper } from '@mui/material'
import React from 'react'
import { PiBuildingOfficeBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import logo from '../img/1000038712-removebg-preview-crop.png'

function Footer() {
    return (
        <div className='footerBackground py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='pageSubHeading'>Company</div>
                        <div className='d-flex flex-column gap-1 ps-1'>
                            <Link className='regularText' name='home' to={'/home'}>Home</Link>
                            <Link className='regularText' name='services' to={'/services'} >Services</Link>
                            <Link className='regularText' name='pricing' to={'/pricing'}>Pricing</Link>
                            <Link className='regularText' name='about-us' to={'/about-us'}>About Us</Link>
                            <Link className='regularText' name='contact' to={'/contact'}>Contact</Link>

                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='pageSubHeading'>Support</div>
                        <div className='d-flex flex-column gap-1 ps-1'>
                            <span className='regularText'>+91-8986454772</span>
                            <span className='regularText'>support@mycashmoney.info</span>
                        </div>
                        <div className='pageSubHeading mt-2'>Legal Policy</div>
                        <div className='d-flex flex-column gap-1 ps-1'>
                            <Link className='regularText' to={'/terms-conditions'}>Terms & Conditions</Link>
                            <Link className='regularText' to={'/legal'}>Legal</Link>
                            <Link className='regularText' to={'/Policy'}>Policy</Link>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='pageSubHeading'>Contact-Us</div>
                        <div className='d-flex flex-column gap-1 ps-1'>
                            <div className='d-flex gap-2 align-items-center'>
                                <PiBuildingOfficeBold />
                                <span className='regularText'>Head Office</span>
                            </div>
                            <span className='regularText'>
                                Plot No. 40/444, Begunia, Dumuduma, Bhubaneswar, Odisha, 751019
                            </span>
                            <span className='regularText'>+91-8986454772</span>
                            <span className='regularText'>Infocashmoney97@gmail.com</span>
                            <span className='regularText'>info@mycashmoney.info</span>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div style={{ height: '100%' }} className='d-flex flex-column justify-content-center align-items-start'>
                            <span>
                                <img
                                    src={logo}
                                    alt="Logo"
                                    width={130}
                                    className='img-fluid'
                                />
                            </span>
                            <span className='regularText'>All In One Secaured Payment Service Provider</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer