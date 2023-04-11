import React from 'react';
import './FeaturedJob.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const FeaturedJob = ({ job }) => {
    const { id, company_logo, job_title, company_name, job_location, job_type, address, salary } = job;
    /*  if (id > 4) {
         return;
     } */
    return (
        <div className='col-12 col-md-6'>
            <div className='job-container'>
                <img className='company-logo img-fluid' src={company_logo} alt="" />
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
                <button className="primary-btn"><Link className='viewDetail-btn' to={`/featuredJob/${id}`}>View Details</Link></button>

            </div>
        </div>
    );
};

export default FeaturedJob;
