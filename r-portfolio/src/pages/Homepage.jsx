import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Homepage() {
    return (
        <div className='container text-center mt-3 aboutContainer'>
            <h2 className=''>About Me</h2>
            <div>
                <img src= '/R-Portfolio/r-portfolio/public/images/nana-modified.png' alt='Profile picture'></img>
            </div>
            <div>
                <br></br>
                <p>Hello Wolrd! My name is Jason <span>Obeng Dappah</span>, and my journey to become a fullstack web developer for 6 months has thought me a lot of skills required to excel at this career path, Skills such as Html/Css/Javascript/Bootstrap/React/Jquery/...</p>
                <br></br>
            </div>
        </div>
    );
}

export default Homepage;