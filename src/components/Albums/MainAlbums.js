import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CollectionAlbums from "./CollectionAlbums";

const MainAlbums = (props) => {
  return (
    <React.Fragment>
      <Container className="mt-2">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <CollectionAlbums />
      </Container>
    </React.Fragment>
  );
};

export default MainAlbums;
