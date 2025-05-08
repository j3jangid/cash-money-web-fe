import { Paper } from '@mui/material'
import React from 'react'

function SignUP() {
    return (
        <div>
            <Paper elevation={1} sx={{ padding: 2, height: '100%' }}>
                <form action="https://formspree.io/f/mpwdrqaw" method="post">
                    <div className='d-flex flex-column gap-2 mt-3'>
                        <div className='d-flex gap-2'>
                            <label htmlFor="name" className='inputLable' style={{ width: '25%' }}>Name:</label>
                            <input type="text" class="form-control" id='name' name='name' required placeholder="Name" />
                        </div>
                        <div className='d-flex gap-2'>
                            <label htmlFor="mobile" className='inputLable' style={{ width: '25%' }}>Mobile Number:</label>
                            <input type="number" class="form-control" id='mobile' name='mobile' required placeholder="Mobile Number" />
                        </div>
                        <div className='d-flex gap-2'>
                            <label htmlFor="email" className='inputLable' style={{ width: '25%' }}>Email Id:</label>
                            <input type="email" class="form-control" id='email' name='email' required placeholder="Email Id" />
                        </div>
                        <div className='d-flex gap-2'>
                            <label htmlFor="gstNo" className='inputLable' style={{ width: '25%' }}>GST Number:</label>
                            <input type="text" class="form-control" id='gstNo' name='gstNo' placeholder="GST Number" />
                        </div>
                        <div className='d-flex gap-2'>
                            <label htmlFor="pinNumber" className='inputLable' style={{ width: '25%' }}>Area PIN:</label>
                            <input type="number" class="form-control" id='pinNumber' name='pinNumber' required placeholder="Area PIN" />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between gap-2 mt-3'>
                        <button className='btn btn-danger' type='reset'>Clear</button>
                        <button className='btn btn-success' type='submit'>Submit</button>
                    </div>
                </form>
            </Paper>
        </div>
    )
}

export default SignUP