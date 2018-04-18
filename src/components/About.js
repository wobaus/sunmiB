import React from 'react';
import culture from '../img/culture.png';
import yoga from '../img/yoga.jpg';
import scuba from '../img/scuba.jpg';
import van from '../img/van.png';
import whales from '../img/whales.png';


const About = () => (
    <about>
        <div class="container-fluid bg-3 text-center">    
        <h3>Interest</h3><br/>
        <div class="row">
            <div class="col-sm-4">
            <p>Art</p>
            <img src={whales} class="img-responsive" styles="width:100%" alt="Image" />
            </div>
            <div class="col-sm-4"> 
            <p>Travel</p>
            <img src={van} class="img-responsive" styles="width:100%" alt="Image" />
            </div>
            <div class="col-sm-4"> 
            <p>Culture</p>
            <img src={culture} class="img-responsive" styles="width:100%" alt="Image" />
            </div>
        </div>
        </div>
    </about>
);

export default About;
