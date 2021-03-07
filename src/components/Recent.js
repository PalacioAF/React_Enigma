import React ,{Fragment} from 'react';

const Recent = () => {
    return ( 
            <Fragment>
				<section id="recent">
				<div className="recent-heading">
				<span>Preparate</span>
				</div>
				<div className="recent-video">
				<iframe id="iframe" title="Enigma" src="https://www.youtube.com/embed/T4v2WB79qYw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
				</section>
            </Fragment>
     );
}
 
export default Recent;