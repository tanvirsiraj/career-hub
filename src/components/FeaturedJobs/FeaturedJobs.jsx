import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('featuredJobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    // console.log(jobs)
    return (
        <div className='featuredJobs-container'>
            <div className="section-container">
                <h1 className='section-title'>Featured Jobs</h1>
                <p className='section-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="container mx-auto row g-4">
                {
                    jobs.map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
            <div className="seeAllJobsBtn">
                <button className="primary-btn">
                    See All Jobs
                </button>
            </div>

        </div>
    );
};

export default FeaturedJobs;