import React from 'react';
import EarningsChart from './EarningsChart';
import RevenueChart from './RevenueChart';
import './ChartsSection.css';

const ChartsSection = () => {
  return (
    <div className="row">
      <div className="col-lg-7 col-xl-8">
        <div className="card shadow mb-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h6 className="text-primary m-0 fw-bold">Earnings Overview</h6>
            <div className="dropdown no-arrow">
              <button className="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">
                <i className="fas fa-ellipsis-v text-gray-400"></i>
              </button>
              <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                <p className="text-center dropdown-header">dropdown header:</p>
                <a className="dropdown-item" href="#">&nbsp;Action</a>
                <a className="dropdown-item" href="#">&nbsp;Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">&nbsp;Something else here</a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="chart-area">
              <EarningsChart />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-xl-4">
        <div className="card shadow mb-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h6 className="text-primary m-0 fw-bold">Revenue Sources</h6>
            <div className="dropdown no-arrow">
              <button className="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">
                <i className="fas fa-ellipsis-v text-gray-400"></i>
              </button>
              <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                <p className="text-center dropdown-header">dropdown header:</p>
                <a className="dropdown-item" href="#">&nbsp;Action</a>
                <a className="dropdown-item" href="#">&nbsp;Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">&nbsp;Something else here</a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="chart-area">
              <RevenueChart />
            </div>
            <div className="text-center mt-4 small">
              <span className="me-2">
                <i className="fas fa-circle text-primary"></i>&nbsp;Direct
              </span>
              <span className="me-2">
                <i className="fas fa-circle text-success"></i>&nbsp;Social
              </span>
              <span className="me-2">
                <i className="fas fa-circle text-info"></i>&nbsp;Refferal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
