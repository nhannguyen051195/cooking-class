import React, { Component } from 'react';
import './Course.css';
import { NavLink } from 'react-router-dom';


class Course extends Component {
    render() {
        return (
            <div>
                <div className="col-1-of-3">
                       <div className="card">
                           <div className="side-front">
                                <div className="card-picture">
                                <img src={this.props.img} alt='cooking class'></img>
                                </div>
                                <h4 className="heading">
                                    <span className="heading-span">{this.props.name}</span>
                                </h4>
                                <div className="card-details">
                                    <ul>
                                        {this.props.children.map((e, i)=>{
                                            return <li key={i+1}>{e}</li>
                                        })}
                                    </ul>
                                </div>
                           </div>
                           <div className="side-back">            
                                 <div className="cta">
                                    <div className="price-box">
                                        <p className="price-only">Only</p>
                                        <p className="price-value">{this.props.price}</p>
                                    </div>
                                   <NavLink to='/checkout' className="buy">Buy now</NavLink>
                                </div> 

                            </div>
                       </div>
                    </div>
                    
            </div>
        );
    }
}

export default Course;