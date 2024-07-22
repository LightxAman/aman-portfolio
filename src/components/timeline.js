import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function timeline(){
        return (
        <VerticalTimeline>

        {/* DetachedMeta PVT LTD */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - Aug 2024"
            contentStyle={{ background: '#4672b9', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  #4672b9' }}
            iconStyle={{ background: '#4672b9', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <div style={{color:"#fff"}}>
                <h3 className="vertical-timeline-element-title">Game Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">DetachedMeta PVT LTD</h4>
                <p>I worked as a 2D game developer to develop game logics, designs, assests, scripts on Unity and Gamemaker studio engines</p>
            </div>
        </VerticalTimelineElement>
        
        {/* PMKVY Intern */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2023  - Nov 2023"
            iconStyle={{ background: '#4672b9', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <div style={{color:"#1c2e4a"}}>
                <h3 className="vertical-timeline-element-title">Python Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Pradhan Mantri Kaushal Vikas Yojna</h4>
                <ul>
                    <li>Conducted comprehensive field study on Python applications in industry settings to identify potential areas for optimization and automation.</li>
                    <li>Developed an automation bot client tailored specifically for our college website’s ERP system, enhancing efficiency in accessing information and receiving notifications.</li>
                </ul>
            </div>
        </VerticalTimelineElement>

         {/* DetachedMeta Intern */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022 - Aug 2022"
            contentStyle={{ background: '#4672b9', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  #4672b9' }}
            iconStyle={{ background: '#4672b9', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <div style={{color:"#fff"}}>
                <h3 className="vertical-timeline-element-title">Python Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">DetachedMeta PVT LTD</h4>
                <p>I worked as a python Dev learning the basics and developing automations</p>
            </div>
        </VerticalTimelineElement>

         {/* Arctic Innovage */}
         <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2022 - May 2022"
            contentStyle={{ background: '#4672b9', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  #4672b9' }}
            iconStyle={{ background: '#4672b9', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <div style={{color:"#fff"}}>
                <h3 className="vertical-timeline-element-title">Python Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Arctic Innovage</h4>
                <p>I worked as a python Dev learning the basics to automation and app building</p>
            </div>
        </VerticalTimelineElement>

        {/* MRIIRS */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#4672b9', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  #4672b9' }}
            date="Aug 2021 - present"
            iconStyle={{ background: '#4672b9', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <div style={{color:"#fff"}}>
            <h3 className="vertical-timeline-element-title">MRIIRS</h3>
            <h4 className="vertical-timeline-element-subtitle">B.TECH CSE | Year 4</h4>
            <h5 className="vertical-timeline-element-subtitle">Data Science and Python Dev</h5>
            <ul>
                {/* <li>Main Programming Language: Python, Java, JavaScript</li>
                <li>Secondary Languages: C++, Go, Bash</li> */}
                <li>
                    Main Programming Language:<br></br>
                    <span className="badge bg-dark p-2 m-1">Python</span>
                    <span className="badge bg-dark p-2 m-1">C++</span>
                    <span className="badge bg-dark p-2 m-1">C</span>
                </li>
                <li>
                    Secondary Languages:<br></br>
                    <span className="badge bg-secondary p-2 m-1">Java</span>
                    <span className="badge bg-secondary p-2 m-1">C#</span>
                    <span className="badge bg-secondary p-2 m-1">JavaScript</span>
                    <span className="badge bg-secondary p-2 m-1"></span>
                </li>
                <li>React Project: This site</li>
                <li>Vue.js project: Assisted in creating a simple backend using Firebase. <a href="https://github.com/BeforeClass/web-frontend" rel="noreferrer" target="_blank" style={{color:"whitesmoke", fontWeight:"bold"}}>Project</a></li>

                {/* <li>Flask project: Using Flask microservices to design and implement a backend Service Oriented Architecture (SOA). Usage of Docker, RabbitMQ, Kong API Gateway and etc. Click <a href="https://github.com/ong-zijian/ESD_Tour_Project"  target="_blank" rel="noreferrer" style={{color:"whitesmoke", fontWeight:"bold"}}>here</a> to view the project.</li> */}
                
                {/* <li>Spring Boot: <a href="https://github.com/ong-zijian/springboot_practice" rel="noreferrer" target="_blank" style={{color:"whitesmoke", fontWeight:"bold"}}>MVC CRUD</a></li> */}
                
                {/* <li>Node.js: <a href="https://github.com/ong-zijian/CSIT_SE_Mini_Challenge_23" rel="noreferrer" target="_blank" style={{color:"whitesmoke", fontWeight:"bold"}}>CRUD</a></li> */}
                
                <li>Skills:<br></br>
                    Game Engines: 
                    <span className="badge bg-secondary p-2 m-1">Unity2D</span>
                    <span className="badge bg-secondary p-2 m-1">Gamemaker studio</span>
                    <span className="badge bg-secondary p-2 m-1">Godot</span>
                    <span className="badge bg-secondary p-2 m-1"></span>
                    <span className="badge bg-secondary p-2 m-1"></span>
                    <span className="badge bg-secondary p-2 m-1"></span>
                    <br></br>
                    Python:
                    <span className="badge bg-secondary p-2 m-1">Numpy</span>
                    <span className="badge bg-secondary p-2 m-1">Pandas</span>
                    <span className="badge bg-secondary p-2 m-1">matplotlib</span>
                    <span className="badge bg-secondary p-2 m-1">scikit-learn</span>
                    <span className="badge bg-secondary p-2 m-1"></span>
                    <br></br>
                    Communication:
                    <span className="badge bg-secondary p-2 m-1">English</span>
                    <span className="badge bg-secondary p-2 m-1">Hindi</span>
                    <span className="badge bg-secondary p-2 m-1">French (Elementary)</span>
                    <span className="badge bg-secondary p-2 m-1">Japanese (Elementary)</span>
                    <span className="badge bg-secondary p-2 m-1"></span>
                    <br></br>
                </li>    
                <li><a href="https://github.com/LightxAman/Data_Science_Foundations" style={{color:"whitesmoke", fontWeight:"bold"}} rel="noreferrer" target="_blank">Data Science</a>:
                    <ul>
                        <li><a href="https://github.com/LightxAman/emotion_detection_Practice" target="_blank" rel="noreferrer" style={{color:"whitesmoke", fontWeight:"bold"}}>AI, ML: Tensorflow, Keras, OpenCV, CNN, RNN</a></li>
                        <li>Tableau, Pandas, Numpy, Matplotlib, Seaborn</li>
                        <li>Linear & Log Regression, Clustering & Decision Tree Classification</li>
                        <li>Social Media & Text:
                            <ul>
                                <li>Reddit Scraping (praw)</li>
                                <li>Sentiment Analysis(NLTK, Vadar, Textblob)</li>
                                <li>Topic Analysis(LDA)</li>
                                <li>Graph Network Analysis (NetworkX)</li>
                            </ul>
                        </li>

                    </ul>
                </li>
                <li>AWS Cloud Foundation</li>
            </ul>
            </div>
        </VerticalTimelineElement>

        {/* Senior Secondary (12th Std) */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="jan 2019  - jan 2020"
            iconStyle={{ background: '#4672b9', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <div style={{color:"#1c2e4a"}}>
                <h3 className="vertical-timeline-element-title">Senior Secondary (12th Std)</h3>
                <h4 className="vertical-timeline-element-subtitle">New Green Field School, Saket</h4>
                <p> Science Stream, Percentage : 84.9%</p>
                <ul>
                </ul>
            </div>
        </VerticalTimelineElement>

        {/* CBSE Science Exibhition */}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2018 - dec 2018"
            contentStyle={{ background: '#4672b9', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  #4672b9' }}
            iconStyle={{ background: '#4672b9', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <div style={{color:"#fff"}}>
                <h3 className="vertical-timeline-element-title">State level awardee</h3>
                <h4 className="vertical-timeline-element-subtitle">CBSE Science Exibhition</h4>
                <p>Working model based on polllution reduction by recycling the exhaust games form vehicles treatment </p>
            </div>
        </VerticalTimelineElement>

        </VerticalTimeline>
    )
}

//reference: https://stephane-monnot.github.io/react-vertical-timeline/#/