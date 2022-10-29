import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="nama">Hi 👋 i'm ZULHAYAD</h1>
      <p className="word">
        Hi, i'm Front End Developers. Who like to make website using React Js
        And Bootsrap.{" "}
        <Link className="read" to="/about">
          Read About Me ➡️<i className="bi bi-arrow-right-short"></i>
        </Link>{" "}
      </p>
      <div className="l-blog">
        <div className="blog-1">
          <h2 className="word2">Latest Blog Posts</h2>
          <Link className="b" to="/blogi">
            React App Todo List Using API
          </Link>

          <p className="b2">
            A simple project using React is to create a Todo List whose data
            list is retrieved in a public API using the fetch method
          </p>
          <Link className="b" to="/blogic">
            React App Random Image Cat Using API
          </Link>

          <p className="b2">
            A project using React is to create a random image cat using public
            api
          </p>
        </div>
      </div>
      <Link to="/blog" className="read2">
        Read All Post ➡️
      </Link>
      <footer>
        <p className="foot">
          ©️2022 Create With <i className="bi bi-heart-fill"></i> zLhYd
        </p>
      </footer>
    </div>
  );
}

export default Home;
