import React, { Fragment } from 'react';
import imagen1 from '../images/service-1.png';
import imagen2 from '../images/service-2.png';
import imagen3 from '../images/service-3.png';

const Service = () => {
    return ( 
        <Fragment>
            <section id="service">
                <div className="service-heading">
                <span>Comments</span>
                <h3>service's Say</h3>
                </div>

                <div className="c-box-container">

                <div className="service-box">

                    <img src={imagen1}
                    alt="service 1"/>

                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>

                    <p>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. </p>

                    <a href="/#">Read More</a>
                </div>

                <div className="service-box">

                    <img src={imagen2}
                    alt="service 2"/>

                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>

                    <p>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. </p>

                    <a href="/#">Read More</a>
                </div>

                <div className="service-box">

                    <img src={imagen3}
                    alt="service 3"/>

                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>

                    <p>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. </p>

                    <a href="/#">Read More</a>
                </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default Service;