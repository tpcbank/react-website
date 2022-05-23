import React, { useState, useEffect } from "react";
import { Container } from "../styles/layoutStyles";
import axios from "axios";
import ReactLoading from "react-loading";

function Blog() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("https://saurav.tech/NewsAPI/sources.json").then((res) => {
      setPosts(res.data.sources);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <h1>Blog</h1>
      <hr />
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ReactLoading
            type={"bars"}
            color={"#34a0ff"}
            height={"20%"}
            width={"20%"}
          />
        </div>
      ) : (
        <>
          {posts.map((data, index) => (
            <>
              <div key={index}>
                <h4>Name: {data.name}</h4>
                <p>Description: {data.description}</p>
                <p>
                  Url:{" "}
                  <a href={data.url} target="_blank">
                    {data.url}
                  </a>
                </p>
                <hr />
              </div>
            </>
          ))}
        </>
      )}
    </Container>
  );
}

export default Blog;
