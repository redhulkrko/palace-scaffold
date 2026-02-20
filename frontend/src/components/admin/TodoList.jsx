import React from 'react';
import './TodoList.css';

const TodoList = () => {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="text-primary m-0 fw-bold">Todo List</h6>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="row g-0 align-items-center">
            <div className="col me-2">
              <h6 className="mb-0"><strong>Lunch meeting</strong></h6>
              <span className="text-xs">10:30 AM</span>
            </div>
            <div className="col-auto">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="formCheck-1" />
                <label className="form-check-label" htmlFor="formCheck-1"></label>
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row g-0 align-items-center">
            <div className="col me-2">
              <h6 className="mb-0"><strong>Afternoon review</strong></h6>
              <span className="text-xs">11:30 AM</span>
            </div>
            <div className="col-auto">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="formCheck-2" />
                <label className="form-check-label" htmlFor="formCheck-2"></label>
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row g-0 align-items-center">
            <div className="col me-2">
              <h6 className="mb-0"><strong>Marketing call</strong></h6>
              <span className="text-xs">12:30 PM</span>
            </div>
            <div className="col-auto">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="formCheck-3" />
                <label className="form-check-label" htmlFor="formCheck-3"></label>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
