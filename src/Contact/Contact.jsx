import { Paper } from '@mui/material'
import React from 'react'
import { TfiWrite } from 'react-icons/tfi'
import companyContacts from '../jsonData/companyContacts'


function Contact() {
  const contacts = companyContacts || []

  return (
    <div>
      <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1 }}>
        <div className='pageHeading'>Contact-Us</div>
      </Paper>

      <div className='container-fluid mt-3'>
        <div className='row'>
          <div className='col-6 p-0'>
            <Paper elevation={1} sx={{ padding: 2, marginRight: 1, height: '100%' }}>
              <center>
                <TfiWrite className='fs-3 themeTextColor' />
              </center>
              <center>
                <p className='boxHeading'>Write Your Message</p>
              </center>
              <form action="https://formspree.io/f/xrbqkbbo" method="post">
                <div className='d-flex flex-column gap-2 mt-3'>
                  <div className='d-flex gap-2'>
                    <label htmlFor="name" className='inputLable' style={{ width: '20%' }}>Name:</label>
                    <input type="text" class="form-control" id='name' name='name' placeholder="Name" required />
                  </div>
                  <div className='d-flex gap-2'>
                    <label htmlFor="mobile" className='inputLable' style={{ width: '20%' }}>Mobile Number:</label>
                    <input type="number" class="form-control" id='mobile' name='mobile' placeholder="Mobile Number" required />
                  </div>
                  <div className='d-flex gap-2'>
                    <label htmlFor="email" className='inputLable' style={{ width: '20%' }}>Email Id:</label>
                    <input type="email" class="form-control" id='email' name='email' placeholder="Email Id" required />
                  </div>
                  <div className='d-flex gap-2'>
                    <label htmlFor="message" className='inputLable' style={{ width: '20%' }}>Message:</label>
                    <textarea class="form-control" id='message' name='message' placeholder='Message' required></textarea>
                  </div>
                </div>
                <div className='d-flex justify-content-between gap-2 mt-3'>
                  <button className='btn btn-danger' type='reset'>Clear</button>
                  <button className='btn btn-success' type='submit'>Submit</button>
                </div>
              </form>
            </Paper>
          </div>
          <div className='col-6 p-0'>
            <Paper elevation={1} sx={{ padding: 2, marginLeft: 1, height: '100%' }}>
              {
                contacts &&
                contacts.map((data, i) => {
                  return (
                    <div class="card mb-3" key={i}>
                      <div class="card-body">
                        <div className='d-flex gap-2 align-items-center'>
                          <h5 class="card-title">{data?.name}</h5>
                          <p class="card-text m-0 inputLable">({data?.role})</p>
                        </div>
                        <div className='d-flex gap-2'>
                          <p class="card-text m-0">{data?.contactNumber}</p>
                          <p class="card-text m-0">{data?.email}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Paper>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Contact