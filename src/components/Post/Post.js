import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Utilities/Loader";
import { Modal, Button } from "react-bootstrap";

const Post = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(false);
  const [currentDetail, setCurrentDetail] = useState({
    id: null,
    title: "",
    body: "",
  });
  const showDetail = (id) => {
    let indexData = datas.findIndex((data) => data.id === id);
    setCurrentDetail(datas[indexData]);
    setClick(true);
  };
  const buttonClick = () => {
    setClick(!click);
    console.log("ini bisa bro");
  };

  useEffect(() => {
    let isClicked = false;
    if (isClicked === false) {
      setLoading(true);
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

    // clean up render atau function yang ada
    return () => {
      isClicked = true;
    };
  }, [limit]);

  if (loading) return <Loader />;

  return (
    <>
      <h1>Total Limit : {limit}</h1>

      {click && (
        <Modal.Dialog
          style={{
            height: "150px",
            width: "600px",
            position: "fixed",
            zIndex: "99",
            transform: "translate(70%,50%)",
            backgroundColor: "grey",
            padding: "10px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <Modal.Header>
            <Modal.Title style={{ fontSize: "18px", fontWeight: "800" }}>
              {currentDetail?.title}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p style={{ fontSize: "14px", paddingTop: "10px" }}>
              {currentDetail?.body}
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={buttonClick}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}

      {datas.map((data, i) => {
        return (
          <div key={i}>
            <button
              className="button"
              style={{ fontSize: "12px" }}
              onClick={() => showDetail(data.id)}
            >
              {data.title}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Post;
