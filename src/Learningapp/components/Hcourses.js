import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Courses from './AllCourses/Courses';

const Hcourses = () => {
  return (
    <div>
        <Header />
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                    <Courses />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Hcourses;