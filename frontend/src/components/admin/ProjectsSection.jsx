import React from 'react';
import TodoList from './TodoList';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="text-primary m-0 fw-bold">Projects</h6>
        </div>
        <div className="card-body">
          <h4 className="small fw-bold">
            Server migration<span className="float-end">20%</span>
          </h4>
          <div className="progress mb-4">
            <div className="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
              <span className="visually-hidden">20%</span>
            </div>
          </div>
          <h4 className="small fw-bold">
            Sales tracking<span className="float-end">40%</span>
          </h4>
          <div className="progress mb-4">
            <div className="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
              <span className="visually-hidden">40%</span>
            </div>
          </div>
          <h4 className="small fw-bold">
            Customer Database<span className="float-end">60%</span>
          </h4>
          <div className="progress mb-4">
            <div className="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
              <span className="visually-hidden">60%</span>
            </div>
          </div>
          <h4 className="small fw-bold">
            Payout Details<span className="float-end">80%</span>
          </h4>
          <div className="progress mb-4">
            <div className="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
              <span className="visually-hidden">80%</span>
            </div>
          </div>
          <h4 className="small fw-bold">
            Account setup<span className="float-end">Complete!</span>
          </h4>
          <div className="progress mb-4">
            <div className="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
              <span className="visually-hidden">100%</span>
            </div>
          </div>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

export default ProjectsSection;
