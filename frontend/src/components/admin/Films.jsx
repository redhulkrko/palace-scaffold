import React from "react";
import "./Films.css";

const Films = () => {
  const films = [
    {
      id: 1,
      title: "Dune: Part Two",
      startDate: "2024-03-01",
      certificate: "12A",
      showingType: "Now Showing",
      revision: "2",
    },
    {
      id: 2,
      title: "Inside Out 2",
      startDate: "2024-06-14",
      certificate: "U",
      showingType: "Now Showing",
      revision: "1",
    },
    {
      id: 3,
      title: "A Quiet Place: Day One",
      startDate: "2024-06-28",
      certificate: "15",
      showingType: "Coming Soon",
      revision: "3",
    },
    {
      id: 4,
      title: "Gladiator II",
      startDate: "2024-11-22",
      certificate: "TBC",
      showingType: "Coming Soon",
      revision: "1",
    },
    {
      id: 5,
      title: "The Batman Part II",
      startDate: "2026-10-02",
      certificate: "TBC",
      showingType: "Coming Soon",
      revision: "4",
    },
    {
      id: 6,
      title: "Mission: Impossible - Dead Reckoning",
      startDate: "2023-07-12",
      certificate: "12A",
      showingType: "Archive",
      revision: "2",
    },
    {
      id: 7,
      title: "Wicked",
      startDate: "2024-11-27",
      certificate: "PG",
      showingType: "Coming Soon",
      revision: "1",
    },
    {
      id: 8,
      title: "Kingdom of the Planet of the Apes",
      startDate: "2024-05-10",
      certificate: "12A",
      showingType: "Now Showing",
      revision: "2",
    },
    {
      id: 9,
      title: "Moana 2",
      startDate: "2024-11-27",
      certificate: "U",
      showingType: "Coming Soon",
      revision: "3",
    },
    {
      id: 10,
      title: "Furiosa: A Mad Max Saga",
      startDate: "2024-05-24",
      certificate: "15",
      showingType: "Now Showing",
      revision: "2",
    },
  ];

  return (
    <div className="container-fluid">
      <h3 className="text-dark mb-4">Films</h3>
      <div className="card shadow">
        <div className="card-header py-3">
          <p className="text-primary m-0 fw-bold">Film Info</p>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 text-nowrap">
              <div
                id="dataTable_length"
                className="dataTables_length"
                aria-controls="dataTable"
              >
                <label className="form-label">
                  Show&nbsp;
                  <select className="d-inline-block form-select form-select-sm">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  &nbsp;
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="text-md-end dataTables_filter"
                id="dataTable_filter"
              >
                <label className="form-label">
                  <input
                    type="search"
                    className="form-control form-control-sm"
                    aria-controls="dataTable"
                    placeholder="Search"
                  />
                </label>
              </div>
            </div>
          </div>
          <div
            className="table-responsive mt-2 table"
            id="dataTable"
            role="grid"
            aria-describedby="dataTable_info"
          >
            <table className="table my-0" id="dataTable">
              <thead>
                <tr>
                  <th>Film Title</th>
                  <th>Start Date</th>
                  <th>Certificate</th>
                  <th>Showing Type</th>
                  <th>Revision</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {films.map((film) => (
                  <tr key={film.id}>
                    <td>{film.title}</td>
                    <td>{film.startDate}</td>
                    <td>{film.certificate}</td>
                    <td>{film.showingType}</td>
                    <td>{film.revision}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary me-2"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger me-2"
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Archive
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td><strong>Film Title</strong></td>
                  <td><strong>Start Date</strong></td>
                  <td><strong>Certificate</strong></td>
                  <td><strong>Showing Type</strong></td>
                  <td><strong>Revision</strong></td>
                  <td><strong>Actions</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="row">
            <div className="col-md-6 align-self-center">
              <p
                id="dataTable_info"
                className="dataTables_info"
                role="status"
                aria-live="polite"
              >
                Showing 1 to 10 of {films.length}
              </p>
            </div>
            <div className="col-md-6">
              <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" aria-label="Previous" href="#">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" aria-label="Next" href="#">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Films;
