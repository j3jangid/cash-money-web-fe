import React from 'react'
// import ErrorPage from '../ErrorPage'
import { Paper } from '@mui/material'
import aboutBG1 from '../img/graph.webp'
import aboutImg1 from '../img/vecteezy_3d-business-wallet-finance-illustration_10175179.webp'
import aboutImg2 from '../img/vecteezy_businessman-raise-the-budget-the-concept-of-increasing_7278452.webp'

function AboutUs() {
  return (
    <div>
      <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1 }}>
        <div className='pageHeading'>AboutUs</div>
      </Paper>
      <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1, mt: 1 }}>
        <div className='container'>
          <center className='pageHeading'>Cash Money</center>
          <div className='pageSubHeading text-center text-dark'>
            At Cash Money Private Limited, we are building the payments infrastructure of the future—designed to power the ambitions of modern businesses from day one.
          </div>
        </div>
        <div className='bg-dark mt-4 rounded-5'>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${aboutBG1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '600px',
              borderRadius: '15px',
            }}>
            <div className='row mt-3' style={{ height: '100%' }}>
              <div className='col-5'>
                <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100%' }}>
                  <img src={aboutImg1} alt="img" width={500} />
                </div>
              </div>
              <div className='col-7'>
                <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100%' }}>
                  <div className='text-center fs-3' style={{ color: 'white' }}>
                    Launched with a vision to simplify digital transactions for startups and growing enterprises, Cash Money offers a comprehensive, full-stack payment platform that enables businesses to accept, manage, and disburse payments with speed, scale, and confidence.
                  </div>
                  <div className='text-center text-light fs-3'>
                    Our platform brings together 100+ payment methods including UPI, cards, net banking, and wallets, making it easier than ever to collect payments from customers across India and beyond. Whether you're running an online store, a service platform, or a subscription business, our one-click checkout, instant payouts, and cross-border transaction capabilities ensure a smooth, high-conversion payment experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <center className='pageHeading'>What makes us different?</center>
          <div className='container'>
            <div className='row my-4'>
              <div className='col-6'>
                <div className='d-flex flex-column gap-3'>
                  <div className='boxHeading fs-5'>
                    Lightning-fast onboarding so you can start accepting payments in under a day
                  </div>
                  <div className='boxHeading fs-5'>
                    Plug-and-play integration with Shopify, WooCommerce, Wix, WordPress, WhatsApp, and more
                  </div>
                  <div className='boxHeading fs-5'>
                    Real-time settlement and smart return prediction tools to improve cash flow and reduce transaction failures
                  </div>
                  <div className='boxHeading fs-5'>
                    Built-in fraud prevention and SecureID—our proprietary identity verification and KYC stack for compliant, safe onboarding
                  </div>
                  <div className='boxHeading fs-5'>
                    Scalable architecture that processes up to 12,000 transactions per second, built to handle spikes in demand without breaking a sweat
                  </div>
                  <div className='boxHeading fs-5'>
                    At Cash Money, we combine agility, innovation, and trust to help businesses unlock their full potential through reliable, developer-friendly, and future-proof payment solutions.
                  </div>
                  <div className='boxHeading fs-5'>
                    We're not just a payment gateway—we're your growth partner in the digital economy.
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex justify-content-center align-items-center ps-5 ms-5' style={{ height: '100%' }}>
                  <img src={aboutImg2} alt="logo" className='img-fluid' width={800} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper >
      {/* <ErrorPage /> */}
    </div >
  )
}

export default AboutUs