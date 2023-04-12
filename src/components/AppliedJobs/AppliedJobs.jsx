import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';
import './AppliedJobs.css'
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const storedJobs = getShoppingCart();

    const savedJobsFromLocalStorage = () => {
        let savedJobs = [];
        for (const id in storedJobs) {
            const addedJobs = jobs.find(job => job.id == id);
            // console.log(addedJobs)
            if (addedJobs) {
                savedJobs.push(addedJobs);
            }
        }
        return savedJobs;
    }

    let count = 0;
    useEffect(() => {
        count++;
        if (count == 1) {
            let savedJobs = savedJobsFromLocalStorage();
            setAppliedJobs(savedJobs);
        }
    }, [])

    // console.log(appliedJobs)
    const remoteJobHandler = () => {
        let savedJobs = savedJobsFromLocalStorage();
        // console.log(savedJobs)
        const allRemoteJobs = savedJobs.filter(job => job.job_location == "Remote")
        // console.log(allRemoteJobs)
        if (allRemoteJobs.length > 0) {
            setAppliedJobs(allRemoteJobs)
        }

    }
    const onsiteJobHandler = () => {
        let savedJobs = savedJobsFromLocalStorage();
        // console.log(savedJobs)
        const allOnsiteJobs = savedJobs.filter(job => job.job_location == "Onsite")
        // console.log(allOnsiteJobs)
        if (allOnsiteJobs.length > 0) {
            setAppliedJobs(allOnsiteJobs)
        }

    }

    return (
        <div className='container'>
            <div className="banner-top">
                <img src="Vector-1.png" alt="" />
            </div>
            <div className="banner-bottom">
                <img src="Vector.png" alt="" />
            </div>
            <h1 className='page-title'>Applied Jobs</h1>

            <div className="appliedJobs-container">
                {
                    appliedJobs.length > 0 ? <div className="applied-btns d-flex gap-3 justify-content-end mb-4">

                        <button onClick={remoteJobHandler} className="primary-btn">
                            Show Remote Jobs</button><button onClick={onsiteJobHandler} className="primary-btn">Show Onsite Jobs</button>
                    </div> : ""
                }
                {
                    appliedJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;