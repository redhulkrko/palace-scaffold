import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <nav className="navbar navbar-expand bg-white shadow mb-4 topbar">
      <div className="container-fluid">
        <button className="btn btn-link d-md-none me-3 rounded-circle" id="sidebarToggleTop" type="button">
          <i className="fas fa-bars"></i>
        </button>
        <form className="d-none d-sm-inline-block mw-100 ms-md-3 me-auto my-2 my-md-0 navbar-search">
          <div className="input-group">
            <input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
            <button className="btn btn-primary py-0" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <ul className="navbar-nav flex-nowrap ms-auto">
          <li className="nav-item dropdown d-sm-none no-arrow">
            <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
              <i className="fas fa-search"></i>
            </a>
            <div className="dropdown-menu p-3 dropdown-menu-end animated--grow-in" aria-labelledby="searchDropdown">
              <form className="w-100 me-auto navbar-search">
                <div className="input-group">
                  <input className="bg-light border-0 form-control small" type="text" placeholder="Search for ..." />
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </li>
          <li className="nav-item mx-1 dropdown no-arrow">
            <div className="nav-item dropdown no-arrow">
              <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                <span className="badge bg-danger badge-counter">3+</span>
                <i className="fas fa-bell fa-fw"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                <h6 className="dropdown-header">alerts center</h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="me-3">
                    <div className="bg-primary icon-circle">
                      <i className="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <span className="small text-gray-500">December 12, 2019</span>
                    <p>A new monthly report is ready to download!</p>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="me-3">
                    <div className="bg-success icon-circle">
                      <i className="fas fa-donate text-white"></i>
                    </div>
                  </div>
                  <div>
                    <span className="small text-gray-500">December 7, 2019</span>
                    <p>$290.29 has been deposited into your account!</p>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="me-3">
                    <div className="bg-warning icon-circle">
                      <i className="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <span className="small text-gray-500">December 2, 2019</span>
                    <p>Spending Alert: We&apos;ve noticed unusually high spending for your account.</p>
                  </div>
                </a>
                <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </div>
          </li>
          <li className="nav-item mx-1 dropdown no-arrow">
            <div className="nav-item dropdown no-arrow">
              <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                <span className="badge bg-danger badge-counter">7</span>
                <i className="fas fa-envelope fa-fw"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                <h6 className="dropdown-header">messages center</h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="me-3 dropdown-list-image">
                    <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center" style={{width: 40, height: 40}}>
                      <i className="fas fa-user text-white"></i>
                    </div>
                    <div className="bg-success status-indicator"></div>
                  </div>
                  <div className="fw-bold">
                    <div className="text-truncate">
                      <span>Hi there! I am wondering if you can help me with a problem I&apos;ve been having.</span>
                    </div>
                    <p className="mb-0 small text-gray-500">Emily Fowler - 58m</p>
                  </div>
                </a>
                <a className="dropdown-item text-center small text-gray-500" href="#">Show All Messages</a>
              </div>
            </div>
          </li>
          <div className="d-none d-sm-block topbar-divider"></div>
          <li className="nav-item dropdown no-arrow">
            <div className="nav-item dropdown no-arrow">
              <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                <span className="d-none d-lg-inline me-2 text-gray-600 small">Admin User</span>
                <div className="border rounded-circle bg-secondary d-inline-flex align-items-center justify-content-center img-profile" style={{width: 32, height: 32}}>
                  <i className="fas fa-user text-white small"></i>
                </div>
              </a>
              <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                <a className="dropdown-item" href="#">
                  <i className="fas fa-user me-2 fa-sm fa-fw text-gray-400"></i>&nbsp;Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-cogs me-2 fa-sm fa-fw text-gray-400"></i>&nbsp;Settings
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-list me-2 fa-sm fa-fw text-gray-400"></i>&nbsp;Activity log
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-sign-out-alt me-2 fa-sm fa-fw text-gray-400"></i>&nbsp;Logout
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
