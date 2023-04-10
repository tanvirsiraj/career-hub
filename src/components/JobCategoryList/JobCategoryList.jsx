import React, { useEffect, useState } from 'react';
import './JobCategoryList.css';
import JobCategory from '../JobCategory/JobCategory';

const JobCategoryList = () => {
    const [jobCategory, setJobCategory] = useState([]);

    useEffect(() => {
        fetch('jobCategoryLists.json')
            .then(res => res.json())
            .then(data => setJobCategory(data))
    }, [])

    return (
        <div>
            <div className='section-container'>
                <h1 className='section-title'>Job Category List</h1>
                <p className='section-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="jobCategoryListContainer container row row-cols-1 row-cols-md-4 mx-auto">
                {
                    jobCategory.map(category => <JobCategory key={category.id} category={category}></JobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategoryList;