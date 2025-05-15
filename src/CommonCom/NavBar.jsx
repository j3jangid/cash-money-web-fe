import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../img/1000038712-removebg-preview-crop.png'


function NavBar() {
    const url = useLocation()
    const [selected, setSelected] = useState('home')
    const navigate = useNavigate()

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
                            <button className='btn btn-success' onClick={() => navigate('/signUp')}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar