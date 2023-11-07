import React from "react";
import { observer } from "mobx-react-lite";
import "../css_components/OperationPanel.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";

const NavBar = observer(() => {
  return (
    <div class="main_div">
      <div className="container-fluid">
        <div className="row">
          <div className="bg-dark col-auto col-md-3 min-vh-100">
            <ul class="nav nav-pills flex-column">
              <li class="nav-item text-white fs-4">
                <button type="button" class="btn btn-light">
                  Направления
                </button>
              </li>
              <li class="nav-item text-white fs-4">
                <button type="button" class="btn btn-light">
                  Специальности
                </button>
              </li>
              <li class="nav-item text-white fs-4">
                <button type="button" class="btn btn-light">
                  Студенты
                </button>
              </li>
              <li class="nav-item text-white fs-4">
                <button type="button" class="btn btn-secondary">
                  Secondary
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NavBar;
