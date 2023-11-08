import React from "react";

const LogoBar = () => {
  return (
    <nav class="navbar navbar-light bg-dark">
      <div class="custom-container d-flex align-items-center">
        <a class="navbar-brand" href="/">
          <img
            src={require("../icons/logo.png")}
            height="40"
            alt="UUST logo"
            loading="lazy"
          />
        </a>
        <div style={{ color: "aliceblue" }}>
          Система контроля лавиноопасности | Avalanche control real-time system
          {/* <hr style={{ margintop: "1px", marginbottom: "1px" }}></hr> */}
        </div>
      </div>
    </nav>
  );
};

export default LogoBar;
