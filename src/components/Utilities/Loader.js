import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-item-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div className="d-flex">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="danger" />
      </div>
    </div>
  );
};

export default Loader;
// 01:18:44
