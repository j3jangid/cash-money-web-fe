import { Paper } from '@mui/material'
import React from 'react'

function Policy() {
    return (
        <div>
            <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1 }}>
                <div className='pageHeading'>Policy</div>
            </Paper>
            <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1, mt: 1 }}>
                <div className='container'>
                    <p className='pageSubHeading'>General Disclaimer</p>
                    <div className='mt-2'>
                        <p className='boxHeading'>Introduction</p>
                        <p className='regularText'>The information provided by CASH MONEY (“we,” “us,” or “our”) is for general informational purposes only. All content, including but not limited to financial data, business advice, services, and materials made available on or through our website, communications, and documents, is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.</p>
                    </div>
                    <hr />
                    <div className='mt-2'>
                        <p className='boxHeading'>No Professional Advice</p>
                        <p className='regularText'>Nothing contained on our platforms or in our communications constitutes financial, legal, tax, or other professional advice. You should consult with a qualified professional before making any decisions based on the information provided by CASH MONEY.</p>
                    </div>
                    <hr />
                    <div className='mt-2'>
                        <p className='boxHeading'>No Guarantees</p>
                        <p className='regularText'>CASH MONEY does not guarantee any specific results or outcomes from the use of our services. Past performance or experiences do not ensure future success or results.</p>
                    </div>
                    <hr />
                    <div className='mt-2'>
                        <p className='boxHeading'>Limitation of Liability</p>
                        <p className='regularText'>Under no circumstance shall CASH MONEY, its employees, agents, or affiliates be liable for any loss or damage of any kind incurred as a result of the use of the information or services provided. Your use of our content and engagement with our company is solely at your own risk.</p>
                    </div>
                    <hr />
                    <div className='mt-2'>
                        <p className='boxHeading'>Third-Party Content</p>
                        <p className='regularText'>Our materials may contain links or references to third-party websites or resources. We do not control or endorse the content of any third-party sites and are not responsible for their availability, accuracy, or reliability.</p>
                    </div>
                    <hr />
                    <div className='mt-2'>
                        <p className='boxHeading'>Policy Changes</p>
                        <p className='regularText'>CASH MONEY reserves the right to update or modify this disclaimer at any time without prior notice. Continued use of our services or materials constitutes your acceptance of any changes.</p>
                    </div>
                    <hr />
                    <div className='mt-2'>
                        <p className='boxHeading'>Contact Us</p>
                        <p className='regularText'>If you have questions about this disclaimer, please contact us at:</p>
                        <ul>
                            <li>+91-8986454772</li>
                            <li><a href="mailto:info@mycashmoney.in">info@mycashmoney.in</a></li>
                            {/* <li>info@mycashmoney.in</li> */}
                        </ul>
                    </div>
                </div>
            </Paper >
            <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1, mt: 1 }}>
                <div className='container'>
                    <p className='pageSubHeading'>Privacy Policy</p>
                    <h5 className='text-bold mt-2'>Effective Date: 1st April,2025 & Last Updated: 6th May,2025</h5>
                    <p className='regularText'>At CASH MONEY (“CASH MONEY”, “we”, “our”, or “us”), we prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your data when you use our mobile application and related services.</p>
                    <hr />
                    <ol className='mt-3'>
                        <li className='boxHeading'>Overview</li>
                        <p className='regularText'>This Privacy Policy applies to all users (“you”, “your”, or “User”) of the CASH MONEY mobile application (“App”) and services. By accessing or using our services, you agree to the collection and use of information in accordance with this policy.</p>
                        <hr />
                        <li className='boxHeading'>Information We Collect</li>
                        {/* <p className='regularText'>We collect the following categories of information:</p> */}
                        <ol>
                            <li><strong>Personal Information:</strong>
                                <ul>
                                    <li>Full Name</li>
                                    <li>Mobile Number</li>
                                    <li>Email Address</li>
                                    <li>Date of Birth</li>
                                    <li>KYC Details (e.g., PAN, Aadhaar)</li>
                                </ul>
                            </li>
                            <li><strong>Financial Information:</strong>
                                <ul>
                                    <li>Wallet Balance</li>
                                    <li>Transaction History</li>
                                    <li>Payment Methods (e.g., UPI IDs, Card Details)</li>
                                </ul>
                            </li>
                            <li><strong>Device and Usage Information:</strong>
                                <ul>
                                    <li>IP Address</li>
                                    <li>Device Type and Operating System</li>
                                    <li>App Usage Data</li>
                                    <li>Log Files</li>
                                </ul>
                            </li>
                            <li><strong>Bill Payment Information:</strong>
                                <ul>
                                    <li>Biller IDs</li>
                                    <li>Payment Amounts</li>
                                    <li>Payment Dates</li>
                                </ul>
                            </li>
                        </ol>
                        <hr />
                        <li className='boxHeading'>Purpose of Data Collection</li>
                        <ul>
                            <li><strong>Service Delivery:</strong> To process transactions, manage wallet balances, and facilitate bill payments.</li>
                            <li><strong>Account Management:</strong> To create and maintain your user account.</li>
                            <li><strong>Customer Support:</strong> To respond to inquiries and provide assistance.</li>
                            <li><strong>Security:</strong> To detect and prevent fraudulent activities.</li>
                            <li><strong>Improvement:</strong> To analyze usage patterns and enhance app performance.</li>
                            <li><strong>Compliance:</strong> To adhere to legal and regulatory requirements.</li>
                        </ul>
                        <hr />
                        <li className='boxHeading'>Purpose of Data Collection</li>
                        <p className='regularText'>We do not sell or rent your personal information to third parties. However, we may share your data with:</p>
                        <ul>
                            <li><strong>Service Providers:</strong> Such as banks, payment gateways, and BBPS aggregators, to facilitate transactions.</li>
                            <li><strong>Regulatory Authorities:</strong> When required by law or to comply with legal processes.</li>
                            <li><strong>Affiliates:</strong> Within our corporate group, for internal administrative purposes.</li>
                        </ul>
                        <p className='regularText'>All third parties are obligated to maintain the confidentiality and security of your information.</p>
                        <hr />
                        <li className='boxHeading'>Data Security</li>
                        <p className='regularText'>We implement robust security measures to protect your data, including:</p>
                        <ul>
                            <li><strong>Encryption:</strong> To secure data transmission.</li>
                            <li><strong>Access Controls:</strong> Role-based access to sensitive information.</li>
                            <li><strong>Regular Audits:</strong> To assess and enhance security protocols.</li>
                        </ul>
                        <p className='regularText'>Despite our efforts, no method of transmission over the internet is entirely secure. Therefore, we cannot guarantee absolute security.</p>
                        <hr />
                        <li className='boxHeading'>Data Retention</li>
                        <p className='regularText'>We retain your personal data only as long as necessary for the purposes outlined in this policy, or as required by law. Typically, transaction and KYC data are retained for up to 7 years, in accordance with RBI and NPCI guidelines.</p>
                        <hr />
                        <li className='boxHeading'>Your Rights</li>
                        <p className='regularText'>You have the right to:</p>
                        <ul>
                            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal obligations.</li>
                            <li><strong>Objection:</strong> Object to the processing of your data under certain circumstances.</li>
                        </ul>
                        <p className='regularText'>To exercise these rights, please contact us at the details provided below.</p>
                        <hr />
                        <li className='boxHeading'>Grievance Redressal</li>
                        <p className='regularText'>If you have any concerns or complaints regarding this Privacy Policy or our data handling practices, please contact our Grievance Officer:</p>
                        <p className='regularText'><strong>Email: </strong><a href="mailto:rajesh.kumar@mycashmoney.in">rajesh.kumar@mycashmoney.in</a></p>
                        <p className='regularText'><strong>Phone: </strong>+91-8986454772</p>
                        <p className='regularText'><strong>Response Time: </strong>Within 3 business days</p>
                        <hr />
                        <li className='boxHeading'>Updates to This Policy</li>
                        <p className='regularText'>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes through our app or other appropriate channels. Continued use of our services after such updates constitutes acceptance of the revised policy.</p>
                        <hr />
                        <li className='boxHeading'>Contact Us</li>
                        <p className='regularText'>For any questions or concerns about this Privacy Policy, please reach out to us</p>
                        <p className='regularText'><strong>Email: </strong><a href="mailto:rajesh.kumar@mycashmoney.in">rajesh.kumar@mycashmoney.in</a></p>
                        <p className='regularText'><strong>Phone: </strong>+91-8986454772</p>
                        <hr />
                    </ol>
                    <span className='text-decoration-underline'>Note:</span> <span>This Privacy Policy is governed by the laws of India. Any disputes arising under this policy shall be subject to the jurisdiction of the courts located in Bhubaneswar, Odisha.</span>
                </div >
            </Paper >
            <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1, mt: 1 }}>
                <div className='container'>
                    <p className='pageSubHeading'>Cancellation Policy</p>
                    <p className='regularText'>At CASH MONEY, we strive to provide exceptional service and transparent policies. Please read the following terms regarding cancellations:</p>
                    <hr />
                    <ol className='mt-2'>
                        <li><strong>Cancellation Requests</strong>
                            <ul>
                                <li>All cancellation requests must be submitted in writing via email to <a href="mailto:rajesh.kumar@mycashmoney.in">rajesh.kumar@mycashmoney.in</a> or through your client portal, where applicable.</li>
                                <li>Requests must include your full name, account number (if applicable), and reason for cancellation.</li>
                            </ul>
                        </li>
                        <hr />
                        <li><strong>Timing & Deadlines</strong>
                            <ul>
                                <li>Cancellations made within 24 hours of a transaction or agreement may be eligible for a full refund or voiding of service, depending on the status of the transaction.</li>
                                <li>After 24 hours, cancellations may be subject to processing fees or partial refunds, depending on the nature of the service or product.</li>
                            </ul>
                        </li>
                        <hr />
                        <li><strong>Non-Refundable Items</strong>
                            <ul>
                                <li>Certain fees, including but not limited to processing fees, consultation fees, or service initiation costs, are non-refundable.</li>
                                <li>Services or products that have already been rendered or delivered in full are not eligible for cancellation or refund.</li>
                            </ul>
                        </li>
                        <hr />
                        <li><strong>Special Cases</strong>
                            <ul>
                                <li>In the event of fraud, duplicate charges, or administrative errors, please contact us immediately for review and correction.</li>
                                <li>CASH MONEY reserves the right to deny cancellations that fall outside the terms of this policy.</li>
                            </ul>
                        </li>
                        <hr />
                        <li><strong>Final Decision</strong>
                            <ul>
                                <li>All cancellations and refund decisions are made at the sole discretion of CASH MONEY and will be communicated within 7 business days of your request.</li>
                            </ul>
                        </li>
                    </ol>
                    <p className='m-0'>For questions or to initiate a cancellation, please contact us at:</p>
                    <p className='m-0'>📧 <a href="mailto:rajesh.kumar@mycashmoney.in">rajesh.kumar@mycashmoney.in</a></p>
                    <p className='m-0'>📞 +91-8986454772</p>
                </div >
            </Paper >
        </div >
    )
}

export default Policy