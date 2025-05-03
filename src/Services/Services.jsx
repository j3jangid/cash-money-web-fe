import { Box, Modal, Paper } from '@mui/material'
import React, { useState } from 'react'
// import ErrorPage from '../ErrorPage'
import services from '../jsonData/services'
import servicePageIng from '../img/services.webp'
import SignUP from '../SignUP';

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


function Services() {
  const servicesData = services
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1 }}>
        <div className='pageHeading'>Services</div>
      </Paper>
      <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1, marginY: 1 }}>
        <div className='container-fluid mt-3' style={{ backgroundColor: '#FDFBF8' }}>
          <div className='row'>
            <div className='col-5'>
              <div className='d-flex justify-content-center align-items-center flex-column'>
                <img src={servicePageIng} alt="services" className='img-fluid' width='60%' />
              </div>
            </div>
            <div className='col-7'>
              <div style={{ height: '100%' }}>
                <div className='d-flex justify-content-center align-items-center flex-column' style={{ height: '100%' }}>
                  <div className='pageHeading'>Turning Clicks into Cash — Simple & Secure</div>
                  <div className='regularText mb-2'>Smart Financial Choices. Seamless Payments. Powered by Cash Money.</div>
                  <button className='btn btn-success' onClick={() => setOpen(true)}>Sign Up Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper>
      <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1, backgroundColor: 'whitesmoke' }}>
        <center>
          <span className='pageSubHeading fs-3'>Our Services</span>
        </center>
        <div className='container mt-3'>
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

export default Services