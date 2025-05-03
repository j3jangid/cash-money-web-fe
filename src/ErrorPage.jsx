import React from 'react'
import { TbDatabaseX } from 'react-icons/tb'

function ErrorPage() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '50vh', fontSize: '2rem' }}>
            <div>
                <TbDatabaseX className='fs-1 themeTextColor' />
            </div>
            <div>
                Data Not Available
            </div>
        </div>
    )
}

export default ErrorPage