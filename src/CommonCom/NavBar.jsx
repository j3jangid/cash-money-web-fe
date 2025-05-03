import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../img/1000038712-removebg-preview-crop.png'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SignUP from '../SignUP';
import { Paper } from '@mui/material';

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

function NavBar() {
    const url = useLocation()
    const [selected, setSelected] = useState('home')
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    // const handleOpen = () => setOpen(true);

    function handleSelect(e) {
        const { name } = e.target;
        setSelected(name)
    }

    useEffect(() => {
        url.pathname === '/' ? setSelected('home') : setSelected(url?.pathname?.split('/')[1])
    }, [url])

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <div>
                        <Link to={'/home'}>
                            <img
                                src={logo}
                                alt="Logo"
                                width={70}
                                className='img-fluid'
                            />
                        </Link>
                    </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <Link className={`boxHeading ${selected === 'home' ? 'selectedNav' : ''}`} onClick={handleSelect} name='home' to={'/home'}>Home</Link>
                        <Link className={`boxHeading ${selected === 'services' ? 'selectedNav' : ''}`} onClick={handleSelect} name='services' to={'/services'} >Services</Link>
                        <Link className={`boxHeading ${selected === 'pricing' ? 'selectedNav' : ''}`} onClick={handleSelect} name='pricing' to={'/pricing'}>Pricing</Link>
                        <Link className={`boxHeading ${selected === 'about-us' ? 'selectedNav' : ''}`} onClick={handleSelect} name='about-us' to={'/about-us'}>About Us</Link>
                        <Link className={`boxHeading ${selected === 'contact' ? 'selectedNav' : ''}`} onClick={handleSelect} name='contact' to={'/contact'}>Contact</Link>
                        <div className='d-flex gap-3'>
                            <button className='btn btn-dark'>Login</button>
                            <button className='btn btn-success' onClick={() => setOpen(true)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>

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
        </div>
    )
}

export default NavBar