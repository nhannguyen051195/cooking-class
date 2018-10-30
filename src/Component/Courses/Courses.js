import React, { Component } from 'react';
import CourseLists from './CourseLists'
import Course from './Course/Course';
import './Courses.css'

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: CourseLists,

        }
    }
    render() {
        let courses = this.state.courses.map((e, index) => {
            return <Course key={index}  name={e.name} img={e.img} price={e.price}>{e.feature}</Course>
        })
        return (
            <div className='container1'>
                <section className="section-tours" id='course'>
                        {courses}
                                  
                </section>
            </div>
        );
    }
}

export default Courses;