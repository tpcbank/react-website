import React, { useState, useEffect } from "react";
import { Container } from "../styles/layoutStyles";
import axios from "axios";

function About() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => setData(res.data));
  }, []);

  return (
    <Container>
      <h1>About</h1>
      <hr />
      <h3>My name is {data.name}</h3>
      <ul>
        <li>email: {data.email}</li>
        <li>phone: {data.phone}</li>
        <li>websote: {data.website}</li>
      </ul>
    </Container>
  );
}

export default About;
