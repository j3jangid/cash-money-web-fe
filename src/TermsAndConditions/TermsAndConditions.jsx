import { Paper } from '@mui/material'
import React from 'react'

function TermsAndConditions() {
    return (
        <div>
            <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1 }}>
                <div className='pageHeading'>Terms & Conditions</div>
            </Paper>
            <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1, mt: 1 }}>
                <div className='container'>
                    <h5 className='text-bold'>Effective Date: 1st April,2025 & Last Updated: 6th May,2025</h5>
                    <p className='regularText'>Welcome to CASH MONEY, a digital platform provided by CASH MONEY, that enables users to conveniently make bill payments and mobile recharges through a secure and user-friendly mobile application. By accessing or using our services, you agree to comply with and be bound by the following Terms and Conditions</p>
                    <hr />
                    <ol className='mt-3'>
                        <li className='boxHeading'>Introduction</li>
                        <p className='regularText'>These Terms and Conditions (“Terms”) govern your use of the CASH MONEY mobile application (“App”) and related services provided by CASH MONEY By downloading, registering, or using the app, you agree to be legally bound by these Terms.</p>
                        <hr />
                        <li className='boxHeading'>Definitions</li>
                        <ul>
                            <li>“CASH MONEY” refers to CASH MONEY, the owner and operator of the CASH MONEY App.</li>
                            <li>“User” refers to any individual who accesses or uses the CASH MONEY App.</li>
                            <li>“Wallet” refers to the prepaid payment instrument provided within the CASH MONEY App.</li>
                            <li>“Services” encompass all functionalities offered through the CASH MONEY App, including but not limited to bill payments, mobile recharges, and wallet services.</li>
                        </ul>
                        <hr />
                        <li className='boxHeading'>Eligibility</li>
                        <p className='regularText'>To use the CASH MONEY services:</p>
                        <ul>
                            <li>You must be a resident of India.</li>
                            <li>You must be at least 18 years of age.</li>
                            <li>You are required to complete KYC verification to use wallet services in accordance with RBI guidelines.</li>
                        </ul>
                        <hr />
                        <li className='boxHeading'>Services Provided</li>
                        <p className='regularText'>CASH MONEY offers the following services:</p>
                        <ul>
                            <li>Digital Wallet (Prepaid Instrument): Allows users to load money via UPI, debit/credit cards.</li>
                            <li>BBPS Bill Payments: Includes services such as Electricity, Gas, Water, Broadband, DTH, EMI, Insurance, and more.</li>
                            <li>Mobile Recharge & Postpaid Payments: Recharge prepaid numbers and pay postpaid bills seamlessly.</li>
                        </ul>
                        <hr />
                        <li className='boxHeading'>Wallet Usage</li>
                        <ul>
                            <li>Funds can be added to the CASH MONEY wallet through UPI or card transactions.</li>
                            <li>The wallet balance is non-interest bearing and can only be used within the app for listed services.</li>
                            <li>Loading, transaction, and holding limits are as per RBI PPI (Prepaid Payment Instrument) regulations.</li>
                            <li>Wallet balance is non-withdrawable and non-refundable, except for failed transactions as per policy.</li>
                        </ul>
                        <hr />
                        <li className='boxHeading'>Account Security</li>
                        <ul>
                            <li>You are solely responsible for the security of your login credentials (mobile number, OTP, password).</li>
                            <li>Do not share OTPs, PINs, or passwords with anyone.</li>
                            <li>CASH MONEY is not liable for any loss or misuse resulting from unauthorized access.</li>
                        </ul>
                        <hr />
                        <li className='boxHeading'>Transaction Policy</li>
                        <ul>
                            <li>All transactions made through the app are final and binding.</li>
                            <li>In the case of failed or declined bill payments, the deducted amount will be automatically refunded to your CASH MONEY wallet.</li>
                            <li>Wallet top-ups are non-refundable once successfully processed.</li>
                        </ul>
                        <hr />
                        <li className='boxHeading'>Fees and Charges</li>
                        <ul>
                            <li>A convenience fee or service charge may be applicable on certain transactions.</li>
                            <li>These charges will be clearly displayed to you before payment confirmation.</li>
                        </ul>
                        <hr />
                        <li className='boxHeading'>Prohibited Use</li>
                        <p className='regularText'>Users are prohibited from:</p>
                        <ul>
                            <li>Engaging in any fraudulent, illegal, or abusive activities.</li>
                            <li>Violating any local, state, or national law.</li>
                            <li>CASH MONEY reserves the right to suspend or terminate accounts found in violation of these rules.</li>
                        </ul>
                        <hr />
                        <li className='boxHeading'>Limitation of Liability</li>
                        <ul>
                            <li>CASH MONEY shall not be responsible for:</li>
                            <ul>
                                <li>Errors due to incorrect biller or account details entered by the user.</li>
                                <li>Service interruptions or delays caused by third-party platforms or network issues.</li>
                            </ul>
                            <li>Users are advised to verify biller information carefully before proceeding with payments.</li>
                        </ul>
                        <hr />
                        <li className='boxHeading'>Termination of Account</li>
                        <p className='regularText'>We reserve the right to suspend, deactivate, or terminate any user account:</p>
                        <ul>
                            <li>For violation of these Terms.</li>
                            <li>Based on legal/regulatory requirements.</li>
                            <li>In cases of suspected misuse or fraudulent behavior.</li>
                        </ul>
                        <hr />
                        <li className='boxHeading'>Governing Law and Jurisdiction</li>
                        <p className='regularText'>These Terms are governed by the laws of India. Any disputes or legal actions arising out of CASH MONEY services shall be subject to the exclusive jurisdiction of the courts of Bhubaneswar, Odisha.</p>
                        <hr />
                        <li className='boxHeading'>Amendments to Terms</li>
                        <p className='regularText'>CASH MONEY may update or modify these Terms at any time. Continued usage of the app or services after any such changes implies your acceptance of the updated Terms.</p>
                        <hr />
                    </ol>
                    <span className='text-decoration-underline'>Note:</span> <span>This Terms & Conditions document is subject to change. Users are encouraged to review it periodically.</span>
                </div>
            </Paper>
        </div>
    )
}

export default TermsAndConditions