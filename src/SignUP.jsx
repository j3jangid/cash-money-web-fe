import { Paper } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { states } from './jsonData/indianStates'
import { useNavigate } from 'react-router-dom'

function SignUP() {
    const indiaStates = states
    const [formData, setFormData] = useState({
        primaryCountry: 'India',
        businessCountry: 'India'
    })
    const [formError, setFormError] = useState({})
    const [accountNumberSame, setAccountNumberSame] = useState(true)
    const navigate = useNavigate()

    function changeHandle(e) {
        const { id, value } = e.target
        setFormData(pre => ({
            ...pre,
            [id]: value
        }))
    }

    function verifyChangeHandle(e) {
        const { value } = e.target
        if (value !== formData.accountNumber) {
            setAccountNumberSame(false)
        } else {
            setAccountNumberSame(true)
        }
    }

    function getFileExtension(fileName) {
        const dotIndex = fileName.lastIndexOf('.');
        return dotIndex !== -1 ? fileName.slice(dotIndex) : '';
    }

    function selectFileHandle(e) {
        const { id, files } = e.target
        const file = files[0];
        if (!file) return;

        const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'application/pdf'];
        if (!validTypes.includes(file.type)) {
            alert('Only image files or PDFs are allowed.');
            return;
        }

        const renamedFile = new File([file], `${id}${getFileExtension(file.name)}`, {
            type: file.type,
            lastModified: file.lastModified,
        });

        setFormData(pre => ({
            ...pre,
            [id]: renamedFile
        }))
    }

    function formValidation() {
        const err = {}
        if (!formData?.orgName?.trim()) err.orgName = true
        if (!formData?.mobile) err.mobile = true
        if (!formData?.email?.trim()) err.email = true
        if (!formData?.gstNumber?.trim()) err.gstNumber = true
        if (!formData?.pan?.trim()) err.pan = true
        if (!formData?.bankName?.trim()) err.bankName = true
        if (!formData?.accountHolderName?.trim()) err.accountHolderName = true
        if (!formData?.accountNumber) err.accountNumber = true
        if (!formData?.accountDetailImg) err.accountDetailImg = true
        if (!formData?.ifsc) err.ifsc = true
        if (!formData?.primaryAddress?.trim()) err.primaryAddress = true
        if (!formData?.primaryCity?.trim()) err.primaryCity = true
        if (!formData?.primaryState?.trim()) err.primaryState = true
        if (!formData?.primaryCountry?.trim()) err.primaryCountry = true
        if (!formData?.primaryPin) err.primaryPin = true
        if (!formData?.businessAddress?.trim()) err.businessAddress = true
        if (!formData?.businessCity?.trim()) err.businessCity = true
        if (!formData?.businessState?.trim()) err.businessState = true
        if (!formData?.businessCountry?.trim()) err.businessCountry = true
        if (!formData?.businessPin) err.businessPin = true
        if (!formData?.clientName?.trim()) err.clientName = true
        if (!formData?.clientFatherName?.trim()) err.clientFatherName = true
        if (!formData?.clientDOB?.trim()) err.clientDOB = true
        if (!formData?.aadharFront) err.aadharFront = true
        if (!formData?.aadharBack) err.aadharBack = true
        if (!formData?.panImg) err.panImg = true
        if (!formData?.orgFront) err.orgFront = true
        if (!formData?.orgInner) err.orgInner = true
        if (!formData?.aadharNumber?.trim()) err.aadharNumber = true

        setFormError(err)
        return Object.keys(err).length === 0
    }

    async function submitHandle() {
        if (!formValidation()) {
            alert('Fill All Required Details')
            return
        }

        if (!accountNumberSame) {
            alert('Check Account Number')
            return
        }

        const payload = {
            orgName: formData.orgName,
            mobile: formData.mobile,
            email: formData.email,
            gstNumber: formData.gstNumber,
            pan: formData.pan,
            parentClientId: formData.parentClientId,
            // "clientType": "", // if creating reseller add "reseller" if whileLable then dont send 
            accountDetails: {
                type: "primary",
                bankName: formData.bankName,
                accountHolderName: formData.accountHolderName,
                accountNumber: formData.accountNumber,
                accountDetailImg: formData.accountDetailImg,
                ifsc: formData.ifsc
            },
            addresses: [
                {
                    title: "Personal Address",
                    address: formData.primaryAddress,
                    city: formData.primaryCity,
                    state: formData.primaryState,
                    country: formData.primaryCountry,
                    pinCode: formData.primaryPin
                },
                {
                    title: "Office Address",
                    address: formData.businessAddress,
                    city: formData.businessCity,
                    state: formData.businessState,
                    country: formData.businessCountry,
                    pinCode: formData.businessPin
                }
            ],
            personData: {
                clientName: formData.clientName,
                clientFatherName: formData.clientFatherName,
                clientDOB: formData.clientDOB,
                aadharFront: formData.aadharFront,
                aadharBack: formData.aadharBack,
                panImg: formData.panImg,
                orgFront: formData.orgFront,
                orgInner: formData.orgInner,
                aadharNumber: formData.aadharNumber
            }
        }

        if (!window.confirm('All Details Are Correct?')) {
            return
        }
        try {
            await axios.post('http://localhost:6060/api/client', payload, { headers: { "Content-Type": "multipart/form-data" } })
            if (window.confirm('Your Request Added Successfully')) {
                navigate('/home')
            }

        } catch (error) {
            console.error('Error While Posting Kyc: ', error);
            alert('Error While Uploading Kyc' + error?.response?.data?.message)
        }
    }

    function clearForm() {
        setFormData({
            primaryCountry: 'India',
            businessCountry: 'India'
        })
    }

    return (
        <div>
            <Paper elevation={1} sx={{ paddingX: 2, paddingY: 1, mb: 1 }}>
                <div className='pageHeading'>Sign Up / Kyc Form</div>
            </Paper>
            <Paper elevation={1} sx={{ px: 2, py: 1, height: '100%' }}>
                <p className='h4 fw-bold m-0'>Compnay Details</p>
                <hr />
                <div className='d-flex flex-column gap-3'>
                    <div className='d-flex gap-3'>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="orgName" className='inputLable ps-2'>Company Name:</label>
                                {
                                    formError.orgName &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="Company Name"
                                type="text"
                                id='orgName'
                                value={formData?.orgName || ''}
                                onChange={changeHandle}
                            />

                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="mobile" className='inputLable ps-2'>Mobile Number:</label>
                                {
                                    formError.mobile &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="Mobile Number"
                                type="number"
                                id='mobile'
                                value={formData?.mobile || ''}
                                onChange={changeHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="email" className='inputLable ps-2'>Email Id:</label>
                                {
                                    formError.email &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="Email Id"
                                type="email"
                                id='email'
                                value={formData?.email || ''}
                                onChange={changeHandle}
                            />
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="gstNumber" className='inputLable ps-2'>GST Number:</label>
                                {
                                    formError.gstNumber &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="GST Number"
                                type="text"
                                id='gstNumber'
                                value={formData?.gstNumber || ''}
                                onChange={changeHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="pan" className='inputLable ps-2'>PAN:</label>
                                {
                                    formError.pan &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="PAN"
                                type="text"
                                id='pan'
                                value={formData?.pan || ''}
                                onChange={changeHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="panImg" className='inputLable ps-2'>PAN Image:</label>
                                {
                                    formError.panImg &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                type="file"
                                id='panImg'
                                accept="image/*,application/pdf"
                                onChange={selectFileHandle}
                            />
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div className='d-flex flex-column gap-1' style={{ width: '205%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="primaryAddress" className='inputLable ps-2'>Company Address:</label>
                                {
                                    formError.businessAddress &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <textarea
                                class="form-control"
                                placeholder="Company Address"
                                type="text"
                                id='businessAddress'
                                value={formData?.businessAddress || ''}
                                onChange={changeHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="primaryCity" className='inputLable ps-2'>City:</label>
                                {
                                    formError.businessCity &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="City"
                                type="text"
                                id='businessCity'
                                value={formData?.businessCity || ''}
                                onChange={changeHandle}
                            />
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="primaryState" className='inputLable ps-2'>State:</label>
                                {
                                    formError.businessState &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            {/* <input
                                class="form-control"
                                placeholder="State"
                                type="text"
                                id='businessState'
                                value={formData?.businessState || ''}
                                onChange={changeHandle}
                            /> */}
                            <select
                                id='businessState'
                                onChange={changeHandle}
                                class="form-control"
                                value={formData?.businessState || ''}
                            >
                                <option value="" disabled selected>Select State</option>
                                {
                                    indiaStates?.map(state => (
                                        <option key={state.name} value={state.name}>{state.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="primaryCountry" className='inputLable ps-2'>Country:</label>
                                {
                                    formError.businessCountry &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="Country"
                                type="text"
                                id='businessCountry'
                                value={formData?.businessCountry || ''}
                            // onChange={changeHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="primaryPin" className='inputLable ps-2'>Area Pin:</label>
                                {
                                    formError.businessPin &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="Area Pin"
                                type="number"
                                id='businessPin'
                                value={formData?.businessPin || ''}
                                onChange={changeHandle}
                            />
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="orgFront" className='inputLable ps-2'>Compnay Front Image:</label>
                                {
                                    formError.orgFront &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                type="file"
                                id='orgFront'
                                accept="image/*,application/pdf"
                                onChange={selectFileHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="orgInner" className='inputLable ps-2'>Comapny Inner Image:</label>
                                {
                                    formError.orgInner &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                type="file"
                                id='orgInner'
                                accept="image/*,application/pdf"
                                onChange={selectFileHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="parentClientId" className='inputLable ps-2'>Referance Client Code:</label>
                                {
                                    formError.parentClientId &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="User Name"
                                type="number"
                                id='parentClientId'
                                value={formData?.parentClientId || ''}
                                disabled
                                onChange={changeHandle}
                            />
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="bankName" className='inputLable ps-2'>Bank Name:</label>
                                {
                                    formError.bankName &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="Bank Name"
                                type="text"
                                id='bankName'
                                value={formData?.bankName || ''}
                                onChange={changeHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="accountNumber" className='inputLable ps-2'>Account Number:</label>
                                {
                                    formError.accountNumber &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="Account Number"
                                type="text"
                                id='accountNumber'
                                value={formData?.accountNumber || ''}
                                onChange={changeHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="verAccountNumber" className='inputLable ps-2'>Verify Account Number:</label>
                                {
                                    formError.verAccountNumber &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                                {
                                    !accountNumberSame &&
                                    <span className='text-danger fw-bold'>Incorrect Account Number</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="Verify Account Number"
                                type="text"
                                id='verAccountNumber'
                                // value={formData?.verAccountNumber || ''}
                                onChange={verifyChangeHandle}
                            />
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="accountHolderName" className='inputLable ps-2'>Account Holder Name:</label>
                                {
                                    formError.accountHolderName &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="Account Holder Name"
                                type="text"
                                id='accountHolderName'
                                value={formData?.accountHolderName || ''}
                                onChange={changeHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="ifsc" className='inputLable ps-2'>IFSC:</label>
                                {
                                    formError.ifsc &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="IFSC"
                                type="text"
                                id='ifsc'
                                value={formData?.ifsc || ''}
                                onChange={changeHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="accountDetailImg" className='inputLable ps-2'>Bank Passbook/Cheque Image:</label>
                                {
                                    formError.accountDetailImg &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                type="file"
                                id='accountDetailImg'
                                accept="image/*,application/pdf"
                                onChange={selectFileHandle}
                            />
                        </div>
                    </div>
                    <p className='h4 fw-bold m-0'>Personal Details</p>
                    <hr className='m-1' />
                    <div className='d-flex gap-3'>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="clientName" className='inputLable ps-2'>Name:</label>
                                {
                                    formError.clientName &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="Name"
                                type="text"
                                id='clientName'
                                value={formData?.clientName || ''}
                                onChange={changeHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="clientFatherName" className='inputLable ps-2'>Father's Name:</label>
                                {
                                    formError.clientFatherName &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="Father's Name"
                                type="text"
                                id='clientFatherName'
                                value={formData?.clientFatherName || ''}
                                onChange={changeHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="clientDOB" className='inputLable ps-2'>DOB:</label>
                                {
                                    formError.clientDOB &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="DOB"
                                type="date"
                                id='clientDOB'
                                value={formData?.clientDOB || ''}
                                onChange={changeHandle}
                            />
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="aadharNumber" className='inputLable ps-2'>Aadhar Number:</label>
                                {
                                    formError.aadharNumber &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="Aadhar Number"
                                type="number"
                                id='aadharNumber'
                                value={formData?.aadharNumber || ''}
                                onChange={changeHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="aadharFront" className='inputLable ps-2'>Aadhar Front Image:</label>
                                {
                                    formError.aadharFront &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                type="file"
                                id='aadharFront'
                                accept="image/*,application/pdf"
                                onChange={selectFileHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="aadharBack" className='inputLable ps-2'>Aadhar Back Image:</label>
                                {
                                    formError.aadharBack &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                type="file"
                                id='aadharBack'
                                accept="image/*,application/pdf"
                                onChange={selectFileHandle}
                            />
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div className='d-flex flex-column gap-1' style={{ width: '205%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="primaryAddress" className='inputLable ps-2'>Personal Address:</label>
                                {
                                    formError.primaryAddress &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <textarea
                                class="form-control"
                                placeholder="Personal Address"
                                type="text"
                                id='primaryAddress'
                                value={formData?.primaryAddress || ''}
                                onChange={changeHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="primaryCity" className='inputLable ps-2'>City:</label>
                                {
                                    formError.primaryCity &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="City"
                                type="text"
                                id='primaryCity'
                                value={formData?.primaryCity || ''}
                                onChange={changeHandle}
                            />
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="primaryState" className='inputLable ps-2'>State:</label>
                                {
                                    formError.primaryState &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            {/* <input
                                class="form-control"
                                placeholder="State"
                                type="text"
                                id='primaryState'
                                value={formData?.primaryState || ''}
                                onChange={changeHandle}
                            /> */}
                            <select
                                id='primaryState'
                                onChange={changeHandle}
                                class="form-control"
                                value={formData?.primaryState || ''}
                            >
                                <option value="" disabled selected>Select State</option>
                                {
                                    indiaStates?.map(state => (
                                        <option key={state.name} value={state.name}>{state.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="primaryCountry" className='inputLable ps-2'>Country:</label>
                                {
                                    formError.primaryCountry &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="Country"
                                type="text"
                                id='primaryCountry'
                                value={formData?.primaryCountry || ''}
                            // onChange={changeHandle}
                            />
                        </div>
                        <div className='d-flex flex-column gap-1' style={{ width: '100%' }}>
                            <div className='d-flex gap-2 align-items-center'>
                                <label htmlFor="primaryPin" className='inputLable ps-2'>Area Pin:</label>
                                {
                                    formError.primaryPin &&
                                    <span className='text-danger fw-bold'>Required</span>
                                }
                            </div>
                            <input
                                class="form-control"
                                placeholder="Area Pin"
                                type="number"
                                id='primaryPin'
                                value={formData?.primaryPin || ''}
                                onChange={changeHandle}
                            />
                        </div>
                    </div>
                    <div className='d-flex justify-content-end gap-3 mt-2'>
                        <button className='btn btn-danger' onClick={clearForm}>Clear</button>
                        <button className='btn btn-success' onClick={submitHandle}>Submit</button>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default SignUP