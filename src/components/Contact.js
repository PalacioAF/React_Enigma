import React, { Fragment } from 'react';
import imagen from '../images/contact.svg';

const Contact = () => {
    return ( 
        <Fragment>

	<section id="contact">

	<img src={imagen}
        alt="contacto"/>

	<h3>Elegí  pasarla bien o de ultima llámame !!!</h3>
	<h3>Mago Enigma Magia Comica</h3>

	<div className="contact-input">
		<a href="https://wa.me/5493814026501" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
	</div>
	</section>

	<footer>
	<p>Copyright 2021</p>
	</footer>
        </Fragment>
     );
}
 
export default Contact;