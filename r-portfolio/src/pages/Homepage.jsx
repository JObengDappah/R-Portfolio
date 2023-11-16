import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Homepage() {
    return (
        <div className='container text-center mt-3 aboutContainer'>
            <h2 className=''>About Me</h2>
            <div>
                <img src='/ProfilePicture.png' alt='Profile picture' className='img-thumbnail img-fluid proPic m-3'></img>
            </div>
            <div>
                <p>Hello Wolrd! My name is Jason Obeng Dappah, and my journey to become a fullstack web developer for 6 months has thought me a lot of skills required to excel at this career path, Skills such as Html/Css/Javascript/Bootstrap/React/Jquery/...</p>
            </div>
        </div>
    );
}

export default Homepage;