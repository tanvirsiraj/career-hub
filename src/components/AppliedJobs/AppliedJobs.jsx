import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';
import './AppliedJobs.css'

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        fetch('featuredJobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    const storedJobs = getShoppingCart();
    // console.log(storedJobs)
    const savedJobs = [];
    for (const id in storedJobs) {
        const addedJobs = jobs.find(job => job.id == id);
        if (addedJobs) {
            savedJobs.push(addedJobs);
        }
    }

    /* useEffect(() => {
        if (savedJobs) {
            setAppliedJobs(savedJobs);
        }
    }, []) */
    console.log(savedJobs)
    // console.log(appliedJobs)

    return (
        <div className='container mb-5'>
            <div className="banner-top">
                <img src="/public/heroImg/Vector-1.png" alt="" />
            </div>
            <div className="banner-bottom">
                <img src="/public/heroImg/Vector.png" alt="" />
            </div>
            <h1 className='page-title'>Applied Jobs</h1>
            <div className="appliedJobs-container">
                {
                    savedJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;