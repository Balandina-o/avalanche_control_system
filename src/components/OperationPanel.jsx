import React from "react";
import { observer } from "mobx-react-lite";
import "../css_components/OperationPanel.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";
import ChartComponent from "./ChartComponent";

const NavBar = observer(() => {
  return (
    <div class="main_div d-flex">
      <div className="container-fluid">
        <div className="row">
          <div className="bg-dark col-auto col-md-3 min-vh-100 position-absolute">
            <ul class="nav nav-pills flex-column">
              <li class="nav-item text-white fs-4">
                <button type="button" class="btn btn-danger">
                  Avalanche trigger
                </button>
              </li>
              <li class="nav-item text-white fs-4">
                <button type="button" class="btn btn-light">
                  Peace state
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <ChartComponent />
      </div>
    </div>
  );
});

export default NavBar;
