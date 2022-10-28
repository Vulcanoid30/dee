import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="nama">Hi 👋 i'm ZULHAYAD</h1>
      <p className="word">
        Hi, i'm Front End Developers. Who like to make website using React Js
        And Bootsrap.{" "}
        <a className="read" href="/about">
          Read About Me ➡️<i className="bi bi-arrow-right-short"></i>
        </a>{" "}
      </p>
      <div className="l-blog">
        <div className="blog-1">
          <h2 className="word2">Latest Blog Posts</h2>
          <a
            className="b"
            href="https://zlhyd.github.io/apiBored/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React App Todo List Using API
          </a>

          <p className="b2">
            A simple project using React is to create a Todo List whose data
            list is retrieved in a public API using the fetch method
          </p>
          <a
            className="b"
            href="https://zlhyd.github.io/catImages/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React App Random Image Cat Using API
          </a>

          <p className="b2">
            A project using React is to create a random image cat using public
            api
          </p>
        </div>
      </div>
      <a href="/blog" className="read2">
        Read All Post ➡️
      </a>
      <footer>
        <p className="foot">
          ©️2022 Create With <i className="bi bi-heart-fill"></i> zLhYd
        </p>
      </footer>
    </div>
  );
}

export default Home;
