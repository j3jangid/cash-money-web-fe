import { Paper } from '@mui/material'
import React from 'react'
import pricing from '../jsonData/pricing'
import { GrCheckboxSelected } from 'react-icons/gr'
// import ErrorPage from '../ErrorPage'

function Pricing() {
  const pricingData = pricing || []
  return (
    <div>
      <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1 }}>
        <div className='pageHeading'>Pricing</div>
      </Paper>
      <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1, my: 1 }}>
        <div className='container'>
          {/* <center className='pageHeading'>Pricing</center> */}
          <div className='pageSubHeading text-center text-dark'>
            We offer a flexible and transparent pricing model to suit your business needs — with <strong>no hidden fees</strong> and multiple payment method options.
          </div>
          <div className='d-flex justify-content-center gap-3 mt-2'>
            <span className='pageSubHeading d-flex align-items-center gap-1'><GrCheckboxSelected />Free Account</span>
            <span className='pageSubHeading d-flex align-items-center gap-1'><GrCheckboxSelected />No Monthly Cost</span>
            <span className='pageSubHeading d-flex align-items-center gap-1'><GrCheckboxSelected />No Setup Fee</span>
            <span className='pageSubHeading d-flex align-items-center gap-1'><GrCheckboxSelected />Easy & Fast Integration</span>
          </div>
        </div>
        <div className='container mt-4'>
          <table className='table table-bordered table-striped table-hover'>
            <thead>
              <tr>
                <th>Payment Method</th>
                <th>Requirments</th>
                <th>Online Payment</th>
                <th>Payout</th>
              </tr>
            </thead>
            <tbody>
              {
                pricingData &&
                pricingData.map((item, i) => (
                  <tr key={i}>
                    <td>{item.type}</td>
                    <td><span className='text-danger'>*</span>{item.tc}</td>
                    <td>{item.onlinePayment}</td>
                    <td>{item.Payout}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <center>
            <p className='pageSubHeading'>Need Custom Pricing or Enterprise Solutions?</p>
            <p className='m-0'>We're here to help.</p>
            <p className='m-0'>📧 <a href="mailto:info@mycashmoney.in">info@mycashmoney.in</a></p>
            <p className='m-0'>📞 +91-8986454772</p>
          </center>
        </div>
      </Paper>
    </div>
  )
}

export default Pricing