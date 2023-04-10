import React from 'react';
import './JobCategory.css';

const JobCategory = ({ category }) => {
    const { category_logo, category_name, jobs_available } = category;
    // console.log(category_logo)
    return (


        <div className='category-container'>
            <div className="category-banner">
                <img src={category_logo} alt="" />
            </div>
            <h3>{category_name}</h3>
            <p>{jobs_available}</p>
        </div>
    );
};

export default JobCategory;