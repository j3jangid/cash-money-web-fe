import React from 'react'
import { TbDatabaseX } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '50vh', fontSize: '2rem' }}>
            <div>
                <TbDatabaseX className='fs-1 themeTextColor' />
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h3>
                    Not Available
                </h3>
                <button className='btn btn-primary px-2'>
                    <Link className='text-white' to={'/home'}>Go To Home</Link>
                </button>
            </div>
        </div>
    )
}

export default ErrorPage