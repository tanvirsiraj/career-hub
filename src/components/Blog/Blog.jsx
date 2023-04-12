import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container'>
            <div className="banner-top">
                <img src="Vector-1.png" alt="" />
            </div>
            <div className="banner-bottom">
                <img src="Vector.png" alt="" />
            </div>

            <h1 className='page-title'>Blog</h1>
            <div className="questionnaire">
                <div className='mb-3'>
                    <h3 className='fw-bold'>1. When should you use context API?
                    </h3>
                    <p className='text-dark mt-0'><span className='fw-bold '>Ans: </span>The Context API in React is useful when you have data that needs to be shared across multiple components, when you want to update data in one component and have it automatically passed down to another component, and when you want to avoid prop drilling. Prop drilling is the process of passing data down from a parent component to a child component through props. This can become cumbersome if you have many levels of nesting in your component hierarchy. Using the Context API can help you avoid prop drilling and make your code more maintainable.</p>
                </div>
                <div className='mb-3'>
                    <h3 className='fw-bold'>2. What is a custom hook?
                    </h3>
                    <p className='text-dark mt-0'><span className='fw-bold '>Ans: </span>A custom hook is a JavaScript function in React that allows you to reuse stateful logic between components. It's a way to extract reusable logic from a component so that it can be shared between multiple components. It typically uses React's built-in hooks to manage state or perform side effects and returns the necessary data or functionality.



                    </p>
                </div>
                <div className='mb-3'>
                    <h3 className='fw-bold'>3. What is useRef?
                    </h3>
                    <p className='text-dark mt-0'><span className='fw-bold '>Ans: </span>useRef is a hook in React that creates a mutable reference to an element or a value, which can be used to access and manipulate properties or methods of the element or value from within a functional component.</p>
                </div>
                <div className='mb-3'>
                    <h3 className='fw-bold'>4. What is useMemo?
                    </h3>
                    <p className='text-dark mt-0'><span className='fw-bold '>Ans: </span>useMemo is a hook in React that helps optimize performance by memoizing the results of expensive calculations. It takes a function that performs the calculation and an array of dependencies, and returns a memoized value that will only be recalculated when one of the dependencies changes.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;