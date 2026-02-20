import React from 'react';
import './DashboardCards.css';

const DashboardCards = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-xl-3 mb-4">
        <div className="card shadow py-2 border-left-primary">
          <div className="card-body">
            <div className="row g-0 align-items-center">
              <div className="col me-2">
                <div className="text-uppercase text-primary mb-1 fw-bold text-xs">
                  <span>Earnings (monthly)</span>
                </div>
                <div className="text-dark mb-0 fw-bold h5">
                  <span>$40,000</span>
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xl-3 mb-4">
        <div className="card shadow py-2 border-left-success">
          <div className="card-body">
            <div className="row g-0 align-items-center">
              <div className="col me-2">
                <div className="text-uppercase text-success mb-1 fw-bold text-xs">
                  <span>Earnings (annual)</span>
                </div>
                <div className="text-dark mb-0 fw-bold h5">
                  <span>$215,000</span>
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xl-3 mb-4">
        <div className="card shadow py-2 border-left-info">
          <div className="card-body">
            <div className="row g-0 align-items-center">
              <div className="col me-2">
                <div className="text-uppercase text-info mb-1 fw-bold text-xs">
                  <span>Tasks</span>
                </div>
                <div className="row g-0 align-items-center">
                  <div className="col-auto">
                    <div className="text-dark me-3 mb-0 fw-bold h5">
                      <span>50%</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}>
                        <span className="visually-hidden">50%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xl-3 mb-4">
        <div className="card shadow py-2 border-left-warning">
          <div className="card-body">
            <div className="row g-0 align-items-center">
              <div className="col me-2">
                <div className="text-uppercase text-warning mb-1 fw-bold text-xs">
                  <span>Pending Requests</span>
                </div>
                <div className="text-dark mb-0 fw-bold h5">
                  <span>18</span>
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-comments fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
