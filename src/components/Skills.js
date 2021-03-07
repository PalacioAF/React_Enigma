import React,{Fragment} from 'react';
import imagen from '../images/skill2.png';

const Skills = () => {
    return (
        <Fragment>

	<section id="skills">

	<div className="skill-text">

		<div className="skill-heading">
		<span>Shows</span>
		</div>

		<div className="s-box-container">

		<div className="skill-box">

		<div className="s-box-icon">
			<i className="far fa-calendar-alt"></i>
		</div>

		<div className="s-box-text">
		<strong>Eventos</strong>
		<p>Podes contratarme para todos tipos de eventos públicos y privados.</p>
		</div>
		</div>

		<div className="skill-box">

		<div className="s-box-icon">
			<i className="fas fa-theater-masks"></i>
		</div>

		<div className="s-box-text">
		<strong>Presentaciones</strong>
		<p>Presentaciones especiales para colegios, primaria y jardines.</p>
		</div>
		</div>

		<div className="skill-box">

		<div className="s-box-icon">
			<i className="fas fa-users"></i>
		</div>

		<div className="s-box-text">
		<strong>Shows abiertos al público</strong>
		<p>Shows de entrada gratiuta o paga.</p>
		</div>
		</div>
			
			
		</div>
	</div>

	<div className="skill-img">
	<img src={imagen}
         alt="skill"/>	
	</div>
	</section>
        </Fragment>
      );
}
 
export default Skills;