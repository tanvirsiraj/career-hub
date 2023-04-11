import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [allJob, setAllJob] = useState([]);

    useEffect(() => {
        fetch('featuredJobs.json')
            .then(res => res.json())
            .then(data => setAllJob(data))
    }, [])

    console.log(allJob);

    useEffect(() => {
        fetch('featuredJobs.json')
            .then(res => res.json())
            .then(data => setJobs(data.slice(0, 4)))
    }, [])
    console.log(jobs)

    const seeAllJobsHandler = () => {
        setJobs(allJob);
    }
    const seeFewJobsHandler = () => {
        setJobs(allJob.slice(0, 4));
    }
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
                {
                    jobs.length === 4 ? <button onClick={seeAllJobsHandler} className="primary-btn">
                        See All Jobs
                    </button> : <button onClick={seeFewJobsHandler} className="primary-btn">
                        See Few Jobs
                    </button>
                }
            </div>

        </div>
    );
};

export default FeaturedJobs;