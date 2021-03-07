import React, { Fragment } from 'react';
import imagen1 from '../images/w1.jpg';
import imagen2 from '../images/w2.jpg';
import imagen3 from '../images/w3.jpg';
import imagen4 from '../images/w4.jpg';
import imagen5 from '../images/w5.jpg';
import imagen6 from '../images/w6.jpg';



const Portfolio = () => {
    return ( 
        <Fragment>
        <section id="portfolio">
            <div className="skill-heading">
		    <span>Galeria</span>
		    </div>
                <div className="p-container">
                <div className="p-box">
                    <div className="overlay-text">
                    <h1>Programas en Vivo</h1>
                    </div>
                    <img src={imagen1}
                    alt="service 1"/>
                    </div>

                    <div className="p-box">
                    <div className="overlay-text">
                    <h1>Show Para Adultos</h1>
                    </div>
                    <img src={imagen2}
                    alt="service 1"/>
                    </div>

                    <div className="p-box">
                    <div className="overlay-text">
                    <h1>Cumpleaños</h1>
                    </div>
                    <img src={imagen3}
                    alt="service 1"/>
                    </div>

                    <div className="p-box">
                    <div className="overlay-text">
                    <h1>Show Para Primaria</h1>	
                    </div>
                    <img src={imagen4}
                    alt="service 1"/>
                    </div>

                    <div className="p-box">
                    <div className="overlay-text">
                    <h1>Eventos</h1>
                    </div>
                    <img src={imagen5}
                    alt="service 1"/>
                    </div>


                    <div className="p-box">
                    <div className="overlay-text">
                    <h1>Puesta En Escena y Sonido</h1>
                    </div>
                    <img src={imagen6}
                    alt="service 1"/>
                    </div>
                </div>
        </section>
        </Fragment>
     );
}
 
export default Portfolio;