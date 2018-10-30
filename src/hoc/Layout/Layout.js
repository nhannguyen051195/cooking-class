import Header from '../../Component/Header/Header'
import Courses from '../../Component/Courses/Courses'
import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Courses/>
            </div>
        );
    }
}

export default Layout;