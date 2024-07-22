import React from "react";

export default function Projects() {
  return (
    <div className="d-flex flex-wrap justify-content-center m-4">
      <h1 className="text-center">Projects</h1>

      <div className="row flex-column justify-content-center m-4 flex-md-row">
        <div className="obj1 flex-column col-12 col-md-6 mb-4 p-2">
          <a href="https://github.com/ong-zijian/ESD_Tour_Project" rel="noreferrer noopener" target="_blank" style={{ textDecoration: 'none' }}>
            <h2>ERP AutoBot:</h2>
          </a>
          <p>
          A Python Bot which automates the ease of logging in our college ERP Icloud ems.
          </p>
        </div>
      </div>



      <div className="row flex-column justify-content-center m-4 flex-md-row">
        <div className="obj1 flex-column col-12 col-md-6 mb-4 p-2">
          <a href="https://github.com/PlanMyMods/web-frontend" rel="noreferrer noopener" target="_blank" style={{ textDecoration: 'none' }}>
            <h2>Plan My Mod: Vue Frontend Project</h2>
          </a>
          <p>
            Plan My Mod is a frontend project that we made to replicate NUSMods. We
            primarily used Vue.js and a plethora of libraries to make the
            application. For this project, I primarily helped with the backend and
            linking of Firebase. Click{" "}
            <a href="https://planmymods.netlify.app/" rel="noreferrer noopener" target="_blank">here</a> to see the app.
          </p>
        </div>
      </div>



      <div className="row flex-column justify-content-center m-4 flex-md-row">
        <div className="obj1 flex-column col-12 col-md-6 mb-4 p-2">
          <a href="https://github.com/ong-zijian/TTX_GPT" rel="noreferrer noopener" target="_blank" style={{ textDecoration: 'none' }}>
            <h2>TTX GPT</h2>
          </a>
          <p>
            This is a generative AI project that aims to use OpenAI's API to turn a traditional Table-top Exercise into something digital.
            For this project, we will be looking at using a Playbook as a reference for a table-top exercise (TTX),
            allowing users to have self-directed practices for their TTX.
          </p>
        </div>
      </div>



      <div className="row flex-column justify-content-center m-4 flex-md-row">
        <div className="obj1 flex-column col-12 col-md-6 mb-4 p-2">
          <a href="https://github.com/ong-zijian/emotion_detection" rel="noreferrer noopener" target="_blank" style={{ textDecoration: 'none' }}>
            <h2>Emotion Detection</h2>
          </a>
          <p>
            This is a project to try and detect emotions using a Convolutional Neural Network (CNN) model to train and detect emotions.
            We used OpenCV to load a video player and used it with the model to detect emotions.
          </p>
        </div>
      </div>



      <div className="row flex-column justify-content-center m-4 flex-md-row">
        <div className="obj1 flex-column col-12 col-md-6 mb-4 p-2">
          <a href="https://github.com/ong-zijian/NLP_Wikipedia_QA" rel="noreferrer noopener" target="_blank" style={{ textDecoration: 'none' }}>
            <h2>NLP: Wikipedia QA Model</h2>
          </a>
          <p>
            This is a project done for an assessment. I found it to be interesting
            and decided to share this. The idea is to create a scraper to scrape the
            Wikipedia page and generate questions and answers.
          </p>
        </div>
      </div>



      <div className="row flex-column justify-content-center m-4 flex-md-row">
        <div className="obj1 flex-column col-12 col-md-6 mb-4 p-2">
          <a href="https://github.com/ong-zijian/CSIT_SE_Mini_Challenge_23" rel="noreferrer noopener" target="_blank" style={{ textDecoration: 'none' }}>
            <h2>NodeJS Backend</h2>
          </a>
          <p>
            This was my attempt for the CSIT SE Mini Challenge 2023. I was successful in creating the service, creating the docker images
            and getting proper returns in the output.
          </p>
        </div>
      </div>

    </div>
  );
}
