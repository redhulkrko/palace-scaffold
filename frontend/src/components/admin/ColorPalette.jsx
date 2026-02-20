import React from 'react';
import './ColorPalette.css';

const ColorPalette = () => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card text-white bg-primary shadow">
            <div className="card-body">
              <p className="m-0">Primary</p>
              <p className="text-white-50 m-0 small">#4e73df</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card text-white bg-success shadow">
            <div className="card-body">
              <p className="m-0">Success</p>
              <p className="text-white-50 m-0 small">#1cc88a</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card text-white bg-info shadow">
            <div className="card-body">
              <p className="m-0">Info</p>
              <p className="text-white-50 m-0 small">#36b9cc</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card text-white bg-warning shadow">
            <div className="card-body">
              <p className="m-0">Warning</p>
              <p className="text-white-50 m-0 small">#f6c23e</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card text-white bg-danger shadow">
            <div className="card-body">
              <p className="m-0">Danger</p>
              <p className="text-white-50 m-0 small">#e74a3b</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card text-white bg-secondary shadow">
            <div className="card-body">
              <p className="m-0">Secondary</p>
              <p className="text-white-50 m-0 small">#858796</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
