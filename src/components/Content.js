import React,{Fragment} from 'react';
import imagen from '../images/model.png';

const Content = () => {
    return ( 
        <Fragment>
			<div className="content">

			<div className="model">
				<img src={imagen}
				alt="model"/>	
			</div>

			<div className="main-text">
				<h1>Mago Enigma Magia Comica</h1>
				<p>
					Disfruta en todo momento de la mejor magia y el humor sano junto al Mago Enigma.
					Un show infaltable en todos los momentos de tu vida, cumples infantiles y adultos, comunión, fiesta  de 15, casamientos y divorcios.
				</p>
				<div className="media-icons">
					<a href="https://www.facebook.com/magoenigma" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
					<a href="https://wa.me/5493814026501" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
					<a href="https://instagram.com/magoenigma?igshid=rfvyne5rn147" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
					<a href="https://www.youtube.com/channel/UCW9v5khxhU3SN7f4-T-_j6g" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>	
				</div>
			</div>
			</div>
        </Fragment>
     );
}
 
export default Content;