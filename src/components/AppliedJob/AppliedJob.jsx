import React from 'react';
import './AppliedJob.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const AppliedJob = ({ job }) => {
    const { id, company_logo, job_title, company_name, job_location, job_type, address, salary } = job;
    return (
        <div>
            <div className='job-container d-md-flex justify-content-between align-items-center'>
                <div className='d-md-flex'>
                    <div className='logo-container'>
                        <img className='company-logo img-fluid' src={company_logo} alt="" />
                    </div>
                    <div className='ms-md-3'>
                        <h3 className='job-title'>{job_title}</h3>
                        <p className='companyName'>{company_name}</p>
                        <div className="job-btn-container d-flex gap-2">
                            <button>{job_location}</button>
                            <button>{job_type}</button>
                        </div>
                        <div className="address-salary d-flex gap-4">
                            <p><FontAwesomeIcon icon={faLocationDot} /><span>{address}</span></p>
                            <p>  <FontAwesomeIcon icon={faDollarSign} /><span>{salary}</span></p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="primary-btn"><Link className='viewDetail-btn' to={`/featuredJob/${id}`}>View Details</Link></button>
                </div>

            </div>
        </div>
    );
};

export default AppliedJob;