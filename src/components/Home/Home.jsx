import React from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import JobCategoryList from '../JobCategoryList/JobCategoryList';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <JobCategoryList></JobCategoryList>
        </div>
    );
};

export default Home;