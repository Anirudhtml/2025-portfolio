import React from "react";
import mock01 from '../assets/images/dioscuri.png';
import mock02 from '../assets/images/jarvis.png';
import mock03 from '../assets/images/finance.png';
import mock04 from '../assets/images/mock04.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <p className="title">Personal Projects</p>
        <div className="projects-grid">
            <div className="project">
                <a href="https://dioscuri.netlify.app/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://dioscuri.netlify.app/" target="_blank" rel="noreferrer"><h2>Fashion E-Commerce Website</h2></a>
                <p>Designed a scalable user-friendly web application using MERN Stack for a fashion firm and created detailed system documentation and architecture diagrams using IT modeling tools</p>
            </div>
            <div className="project">
                <a href="https://jarvis-the-ai.vercel.app/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://jarvis-the-ai.vercel.app/" target="_blank" rel="noreferrer"><h2>Enterprise-Scale Conversational AI Platform</h2></a>
                <p>Built an AI-powered chatbot using MERN stack with a 30% reduction in response latency and integrated OpenAI API for NLP, enhancing user engagement by 40% and designed responsive React frontend and scalable backend handling 1,000+ daily chats.</p>
            </div>
            <div className="project">
                <a href="https://finacetracker.netlify.app/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://finacetracker.netlify.app/" target="_blank" rel="noreferrer"><h2>Personal Budget Tracker</h2></a>
                <p>Created a finance management tool enabling accurate tracking of expenses and savings and leveraged MongoDB Atlas for secure, high-performance data storage.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;