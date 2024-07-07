import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import default styles or create your own
import NewFamiliesRequest from "./NewFamiliesRequest";
import FamiliesList from "./FamiliesList";

const FamilyList = () => {
  return (
    <div className="container-fluid py-4">
      <div className="card shadow-lg mx-4">
        <div className="card-body p-3">
          <div className="row gx-4">
            <div className="col-lg-12 col-md-12 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
              <div className="nav-wrapper position-relative end-0">
                <Tabs>
                  <TabList className="nav nav-pills nav-fill p-1">
                    <Tab className="nav-item">
                      <a className="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center" role="tab">
                        <i className="ni ni-app" />
                        <span className="ms-2">Families list</span>
                      </a>
                    </Tab>
                    <Tab className="nav-item">
                      <a className="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center" role="tab">
                        <i className="ni ni-email-83" />
                        <span className="ms-2">New Request</span>
                      </a>
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div className="row mt-4">
                   <FamiliesList/>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="row mt-4">
                      <NewFamiliesRequest />
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyList;
