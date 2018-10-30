import React, { Component } from 'react';
import './Recipe.css'


class recipe extends Component {
    render() {
            return (
            <div>
                <div className="col-1-of-4">
                            <div className='feature-box'>
                                <h3 className="heading-tertiary">{this.props.name}</h3>
                                <div className='photo'>
                                    <img src={this.props.src} alt='food'></img>
                                </div>
                                <div className='caption'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                </p> 
                                </div>
                            <div><a href={'#'+this.props.id} className="btn btn--white">Show</a></div>    
                            </div>
                </div>                       

                 <div className="popup" id={this.props.id}>
                 <a href="#section-tours" className="popup-close">Close (stop video before press close)</a>
                 <div className="popup-content">
                        <iframe width="100%" height="100%"
                        src={this.props.video} title={this.props.name}  frameBorder="0"  allowFullScreen></iframe>

                        
                    </div>
                </div>
            </div>
        );
    }
}

export default recipe;