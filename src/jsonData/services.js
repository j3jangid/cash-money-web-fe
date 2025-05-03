import { MdPayment, MdSendToMobile, MdDashboard, MdOutlinePayment } from "react-icons/md";
import { FaMoneyCheckAlt, FaMobileAlt, FaUserCog, FaBuilding, FaPlug } from "react-icons/fa";
import { RiBankLine } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";

const services = [
    {
        logo: <MdPayment className="fs-3" />,
        name: "UPI Collection (Payin) API Service",
        description: "Allows businesses to collect payments via UPI from customers in real-time."
    },
    {
        logo: <FaMoneyCheckAlt className="fs-3" />,
        name: "Payout API Service",
        description: "Enables automated fund disbursement to bank accounts, UPI IDs, and wallets."
    },
    {
        logo: <MdDashboard className="fs-3" />,
        name: "UPI Payout Dashboard",
        description: "A web interface to manage and track UPI-based payouts efficiently."
    },
    {
        logo: <BiTransfer className="fs-3" />,
        name: "Bulk Payout Service",
        description: "Facilitates mass fund transfers to multiple recipients through a single API call."
    },
    {
        logo: <FaMobileAlt className="fs-3" />,
        name: "Mobile Recharge API Service",
        description: "Provides recharge functionality for all major telecom operators across India."
    },
    {
        logo: <RiBankLine className="fs-3" />,
        name: "DMT API Service",
        description: "Enables domestic money transfer services to any bank across India."
    },
    {
        logo: <MdOutlinePayment className="fs-3" />,
        name: "AEPS API Service",
        description: "Offers Aadhaar Enabled Payment System for cash withdrawal, balance inquiry, and more."
    },
    {
        logo: <FaPlug className="fs-3" />,
        name: "BBPS API Service",
        description: "Enables bill payments like electricity, water, gas, and more using Bharat BillPay System."
    },
    {
        logo: <FaMobileAlt className="fs-3" />,
        name: "Multi Recharge API Service",
        description: "Single API for mobile, DTH, data card, and utility recharges across multiple providers."
    },
    {
        logo: <FaUserCog className="fs-3" />,
        name: "B2B Admin Portal",
        description: "A management system for agents, distributors, and API partners to monitor transactions."
    },
    {
        logo: <FaBuilding className="fs-3" />,
        name: "White Label Portal",
        description: "Custom-branded platform for partners to offer services under their own brand identity."
    },
    {
        logo: <MdSendToMobile className="fs-3" />,
        name: "B2C Admin Portal",
        description: "Customer-focused portal for managing end-user services and transactions."
    }
];


export default services;
