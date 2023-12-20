// Project.js
import React from 'react';
import Card from 'react-bootstrap/Card';

const Project = ({ name }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <div className='square'></div>
      <Card.Body>
        <Card.Title>Project__{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

import React from 'react';

const projectNames = ['Project1', 'Project2', 'Project3', 'Project4'];

const ProjectsList = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {projectNames.map((name, index) => (
        <Project key={index} name={name} />
      ))}
    </div>
  );
};
