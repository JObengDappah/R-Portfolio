import React from 'react';
import Project from '../components/Project';
import { Row } from 'react-bootstrap';

const projects = [
    {
        title: 'Wallet Whiz-2.0',
        image: '/WalletWhiz2.0.png',
        deployedLink: 'https://frozen-brushlands-26062-9afa804fc3f2.herokuapp.com/',
        repoLink: 'https://github.com/cslunsford/wallet-whiz-2.0',
    }, 
];

function Portfolio() {
    return (
        <div className='text-center'>
            <h2>My Projects</h2>
            <h5>Please note apps that are spun down or are not deployed will link to repository's README or video demonstration when applicable!</h5>
            <Row xs={1} md={2}>
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </Row>
        </div>
    );
}

export default Portfolio;