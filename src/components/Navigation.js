import React,{Fragment} from 'react';
import imagen from '../images/logo.png';

const Navigation = () => {
    return ( 
        <Fragment>

            <section id="main">
                <nav>
                    <a href="/#" className="logo">
                        <img src={imagen}
                        alt="logo"/>	
                    </a>

                        <input className="menu-btn" type="checkbox" id="menu-btn"/>
                        <label className="menu-icon" htmlFor="menu-btn">
                            <span className="nav-icon"></span>
                        </label>

                    <ul className="menu">
                        <li><a href="#main">Home</a></li>	
                        <li><a href="#skills">Shows</a></li>	
                        <li><a href="#recent">About</a></li>	
                        <li><a href="#portfolio">Galeria</a></li>	
                        <li><a href="#contact">Contacto</a></li>	
                    </ul>

                    <a href="#main" className="hey">Enigma</a>
                </nav>
            </section>

        </Fragment>
     );
}
 
export default Navigation;