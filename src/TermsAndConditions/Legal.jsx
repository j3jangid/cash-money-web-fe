import { Paper } from '@mui/material'
import React from 'react'

function Legal() {
    return (
        <div>
            <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1 }}>
                <div className='pageHeading'>Legal</div>
            </Paper>
            <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1, mt: 1 }}>
                <div className='container'>
                    <p className='pageSubHeading'>CASH MONEY Legal and Compliance Policy</p>
                    <h5 className='text-bold'> Effective Date: 1st April,2025 Last Updated: 6th May,2025</h5>
                    <hr />
                    <ol>
                        <li><strong>Purpose</strong>
                            <p>CASH MONEY is committed to maintaining the highest standards of legal and regulatory compliance. This Legal and Compliance Policy outlines our obligations, responsibilities, and procedures to ensure lawful operations and ethical conduct in all areas of our business.</p>
                        </li>
                        <hr />
                        <li><strong>Scope</strong>
                            <p>This policy applies to all CASH MONEY employees, contractors, agents, officers, and any third parties acting on behalf of the company.</p>
                        </li>
                        <hr />
                        <li><strong>Compliance with Laws and Regulations</strong>
                            <p className='m-0'>CASH MONEY complies with all applicable federal, state, and local laws, including but not limited to:</p>
                            <ul>
                                <li>Financial regulations</li>
                                <li>Anti-money laundering (AML) laws</li>
                                <li>Consumer protection laws</li>
                                <li>Data privacy regulations</li>
                                <li>Tax laws</li>
                                <li>Employment and labor laws</li>
                            </ul>
                        </li>
                        <hr />
                        <li><strong>Ethical Conduct</strong>
                            <p>We expect all employees and representatives to act with integrity and professionalism. Any form of bribery, corruption, fraud, or unethical behavior is strictly prohibited.</p>
                        </li>
                        <hr />
                        <li><strong>Data Privacy and Security</strong>
                            <p>CASH MONEY adheres to strict data protection standards. We collect, use, and store personal data in compliance with relevant privacy laws, including the [insert applicable data privacy law, e.g., GDPR, CCPA].</p>
                            <p>All sensitive client and business information must be protected against unauthorized access, disclosure, alteration, or destruction.</p>
                        </li>
                        <hr />
                        <li><strong>Anti-Money Laundering (AML) and Know Your Customer (KYC)</strong>
                            <p className='m-0'>We maintain robust AML and KYC procedures to prevent illegal financial activity. This includes:</p>
                            <ul>
                                <li>Verifying the identity of all clients</li>
                                <li>Monitoring transactions for suspicious activity</li>
                                <li>Reporting any red flags to the appropriate authorities</li>
                            </ul>
                        </li>
                        <hr />
                        <li><strong>Training and Awareness</strong>
                            <p>All employees must complete compliance training upon hiring and at regular intervals. Additional training will be provided as regulations evolve or new compliance risks are identified.</p>
                        </li>
                        <hr />
                        <li><strong>Reporting Violations</strong>
                            <p>Anyone who suspects a violation of this policy or any applicable law must report it immediately to the Compliance Officer or through our confidential reporting system. Retaliation against whistleblowers is strictly prohibited.</p>
                        </li>
                        <hr />
                        <li><strong>Enforcement</strong>
                            <p>Violations of this policy may result in disciplinary action, including termination of employment or contract, and may be reported to legal authorities where required.</p>
                        </li>
                        <hr />
                        <li><strong>Policy Review</strong>
                            <p>This policy will be reviewed annually or as needed to reflect changes in laws, regulations, or the business environment.</p>
                        </li>
                    </ol>
                    <hr />

                    <h4>Contact Information</h4>
                    <p className='m-0'>For questions or to report compliance concerns, please contact:</p>
                    <p className='m-0'><strong>Compliance Officer</strong></p>
                    <p className='m-0'>📧 <a href="mailto:rajesh.kumar@mycashmoney.in">rajesh.kumar@mycashmoney.in</a></p>
                    <p className='m-0'>📞 +91-8986454772</p>
                </div>
            </Paper>
        </div>
    )
}

export default Legal