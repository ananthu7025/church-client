import React from "react";

const Dashboard = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row mt-4">
      <div className="col-lg-7 ">
          <div className="card">
            <div className="card-header pb-0 p-3">
              <h6 className="mb-0">Family Member Requests</h6>
            </div>
            <div className="card-body p-3 dash-card-h">
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i className="ni ni-single-02 text-white opacity-10" />
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">House Name</h6>
                      <span className="text-xs">
                        Family Mamber name (requester),{" "}
                        <span className="font-weight-bold">{Date.now()}</span>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                      <i className="ni ni-bold-right" aria-hidden="true" />
                    </button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i className="ni ni-single-02 text-white opacity-10" />
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">House Name</h6>
                      <span className="text-xs">
                        Family Mamber name (requester),{" "}
                        <span className="font-weight-bold">{Date.now()}</span>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                      <i className="ni ni-bold-right" aria-hidden="true" />
                    </button>
                  </div>
                </li> <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i className="ni ni-single-02 text-white opacity-10" />
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">House Name</h6>
                      <span className="text-xs">
                        Family Mamber name (requester),{" "}
                        <span className="font-weight-bold">{Date.now()}</span>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                      <i className="ni ni-bold-right" aria-hidden="true" />
                    </button>
                  </div>
                </li>
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i className="ni ni-single-02 text-white opacity-10" />
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">House Name</h6>
                      <span className="text-xs">
                        Family Mamber name (requester),{" "}
                        <span className="font-weight-bold">{Date.now()}</span>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                      <i className="ni ni-bold-right" aria-hidden="true" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-5 ">
          <div className="card">
            <div className="card-header pb-0 p-3">
              <h6 className="mb-0">Notice Board</h6>
            </div>
            <div className="card-body p-3 dash-card-h">
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i className="ni ni-tag  text-white opacity-10" />
                    </div>
                    <div className="d-flex flex-column">
                    <h6 className="mb-1 text-dark text-sm">Join us tomorrow for a powerful prayer session at house!</h6>

                      <span className="text-xs">
                        {Date.now("DD/MM/YYYY")}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                      <i className="ni ni-bold-right" aria-hidden="true" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-7 ">
          <div className="card">
            <div className="card-header pb-0 p-3">
              <h6 className="mb-0">Events</h6>
            </div>
            <div className="card-body p-3 dash-card-h">
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i className="ni ni-mobile-button text-white opacity-10" />
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">Perunnal</h6>
                      <span className="text-xs">
                       {Date.now("DD/MM/YYYY")}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                      <i className="ni ni-bold-right" aria-hidden="true" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-5 ">
          <div className="card">
            <div className="card-header pb-0 p-3">
              <h6 className="mb-0">Prayer Requests</h6>
            </div>
            <div className="card-body p-3 dash-card-h">
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div className="d-flex align-items-center">
                    <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i className="ni ni-mobile-button text-white opacity-10" />
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 text-dark text-sm">Prayer Request by a person</h6>
                      <span className="text-xs">
                        {Date.now("DD/MM/YYYY")}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                      <i className="ni ni-bold-right" aria-hidden="true" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;