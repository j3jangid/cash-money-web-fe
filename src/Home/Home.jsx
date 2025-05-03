import React, { useState } from 'react'
// import ErrorPage from '../ErrorPage'
import { Box, Modal, Paper } from '@mui/material'
import wellcomeImg from '../img/vecteezy_digital-payment-system-secure-fast-and-convenient-online_54716341.webp'
import wellcomeImg1 from '../img/vecteezy_global-business-growth-analyst-and-asset-investment-chart_27244714.png'
import services from '../jsonData/services'
import SignUP from '../SignUP'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'whiteSmoke',
    border: '1px solid #000',
    borderRadius: '7px',
    boxShadow: 24,
    p: 1,
};

function Home() {
    const servicesData = services
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1 }}>
                <div className='pageHeading'>Home</div>
            </Paper>
            <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1, my: 1 }}>
                <div className='container'>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100%' }}>
                                <h1>Welcome to <span className='pageHeading'>CASH MONEY</span></h1>
                                <p className='pageSubHeading'>Your one-stop solution for all your Payment needs.</p>
                                <button className='btn btn-primary mt-2' onClick={() => setOpen(true)}>Sign Up Today</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={wellcomeImg} alt="Welcome" className="img-fluid" width={400} />
                        </div>
                    </div>
                </div>
                <div className='lightBackground p-5 rounded-3'>
                    <div className='pageSubHeading text-center'>Why Choose Us?</div>
                    <div className='text-center boxHeading'>We are a team of passionate individuals who are dedicated to providing the best payment solutions for our customers. Our mission is to make payments easy, secure, and accessible for everyone.</div>
                </div>
                <div className='container mt-2'>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={wellcomeImg1} alt="Welcome" className="img-fluid" width={400} />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100%' }}>
                                <h1 className='pageHeading'>What We Do</h1>
                                <p className='regularText'><span className='pageSubHeading'>CASH MONEY</span> is redefining the way businesses and individuals manage their finances with tailored digital payment solutions. Our expertise lies in creating secure, intuitive platforms that simplify transactions, streamline billing, and support real-time financial decisions. From advanced payment gateways to smart budgeting tools, we empower users with technology that adapts to evolving financial needs. Leveraging innovations in mobile payments, cloud infrastructure, and data security, Cash Money ensures seamless performance and trusted service. Whether it's personal finance management or enterprise-level systems, our solutions are designed for speed, reliability, and future-ready scalability. Partner with Cash Money to unlock smarter, simpler, and safer financial experiences.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-4'>
                    <h1 className='pageHeading text-center mb-4'>Our Services</h1>
                    <div className='row'>
                        {
                            servicesData &&
                            servicesData?.map((service, i) => {
                                return (
                                    <div className='col-4' key={i}>
                                        <div className="card mb-4 cardHoverEffect">
                                            <div className="card-body">
                                                <div className='d-flex align-items-end gap-2 mb-2'>
                                                    {service?.logo}
                                                    <h5 className="card-title themeTextColor m-0">{service?.name}</h5>
                                                </div>
                                                <p className="card-text regularText">{service?.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='lightBackground p-3 rounded-3 d-flex justify-content-between align-items-center'>
                    <span className='boxHeading'>Start Your Journy With <span className='pageSubHeading'>CASH MONEY</span>.</span>
                    <span>
                        <button className='btn btn-primary mt-2' onClick={() => setOpen(true)}>Register Now</button>
                    </span>
                </div>
            </Paper>

            <div>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                        <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1, mb: 1 }}>
                            <div className='pageHeading'>Sign Up</div>
                        </Paper>
                        <SignUP />
                    </Box>
                </Modal>
            </div>

            {/* <ErrorPage /> */}
        </div>
    )
}

export default Home