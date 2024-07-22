import zijian from '../image/LightLogo.png';
import '../stylesheet/App.css';
import VerticalTimeline from '../components/timeline.js'
import ExampleComponent from '../components/typing';
// import Cert from "../components/certs.js";
// import Projects from "../components/project.js"
import React from 'react';

function HomePage() {
  return (
    <div>
      <div className="mt-2 d-flex justify-content-center" id='move'>
        <img src={zijian} alt="Light Logo" class= "img-responsive m-4 col-3 w-3"></img>
      </div>
      <div className="m-12 pb-12">
        <ExampleComponent/>
      </div>

      <div className="card text-white mb-3 mt-3 mx-auto col-6" style={{ backgroundColor: '#1c2e4a', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)' }}>
        <div className="card-header text-center" style={{ background: 'linear-gradient(to right, #1c2e4a, #4682b4)' }}>
          <h2>Contact Details</h2>
        </div>
        <div className="card-body text-left">
          <h5 className="card-title">Email:</h5>
          <ul className="card-text">
            <li>amanxlight@gmail.com</li>
          </ul>
          <h5 className="card-title">GitHub:</h5>
          <ul className="card-text">
            <li>LightxAman</li>
          </ul>
        </div>
        <a href="https://drive.google.com/file/d/1jxmP2wZEQiAKPHRY5Gc2w4ZVHzJ78iXa/view?usp=sharing" rel="noreferrer noopener" target="_blank" className="btn btn-light m-2"><b>Resume</b></a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <hr
            style={{
              height: '3px',
              width: '50%',
              margin: '20px auto',
              border: 'none',
              borderTop: '2px dashed #1c2e4a',
            }}
        />
      </div>

      <div className="mt-6">
        <h2 className="text-center m-2" style={{color:'#1c2e4a'}}>My Portfolio</h2>
        <VerticalTimeline/>
      </div>
    </div>
  );
}

export default HomePage;