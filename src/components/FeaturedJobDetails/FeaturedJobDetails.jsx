import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './FeaturedJobDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faDollarSign, faBriefcase, faPhone } from '@fortawesome/free-solid-svg-icons'

const FeaturedJobDetails = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    const { featuredJobId } = useParams();
    console.log(featuredJobId);
    const [data, setData] = useState({});

    useEffect(() => {
        if (jobs) {
            let matchJobDetails = jobs.find(job => job.id == featuredJobId);
            // console.log(matchJobDetails)
            setData(matchJobDetails)
        }
    }, [])

    console.log(data)
    return (
        <div className='container mb-5'>
            <div className="banner-top">
                <img src="/public/heroImg/Vector-1.png" alt="" />
            </div>
            <div className="banner-bottom">
                <img src="/public/heroImg/Vector.png" alt="" />
            </div>
            <h1 className='page-title'>Job Details</h1>
            <div className="jobDetail-container">
                <div className="row">
                    <div className="col-md-8">
                        <p className='mb-1'><span className='fw-bold text-dark'>Job Description: </span>{data.job_description}</p>
                        <p className='mb-1'><span className='fw-bold text-dark'>Job Responsibility: </span>{data.job_responsibility}</p>
                        <p className='mb-1'><span className='fw-bold text-dark'>Educational Requirements: <br /></span>{data.educational_requirements}</p>
                        <p className='mb-1'><span className='fw-bold text-dark'>Experiences: <br /></span>{data.experiences}</p>
                    </div>
                    <div className="col-md-4 ">
                        <div className="details-card">
                            <h3>Job Details</h3>
                            <hr />
                            <p><FontAwesomeIcon className='icon' icon={faDollarSign} /><span className='fw-bold ms-2'>Salary: </span>{data.salary}(Per Month)</p>
                            <p><FontAwesomeIcon className='icon' icon={faBriefcase} /><span className='fw-bold ms-2'>Job Title : </span>{data.job_title}</p>
                            <h3 className='mt-4'>Contact Information</h3>
                            <hr />
                            <p><FontAwesomeIcon className='icon' icon={faPhone} /><span className='fw-bold ms-2'>Phone : </span>{data.phone}</p>
                            <p><FontAwesomeIcon className='icon' icon={faEnvelope} /><span className='fw-bold ms-2'>Email : </span>{data.email}</p>
                            <p><FontAwesomeIcon className='icon' icon={faLocationDot} /><span className='fw-bold ms-2'>Address : </span>{data.applicant_address}</p>

                        </div>
                        <button className='primary-btn apply-now-btn'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobDetails;