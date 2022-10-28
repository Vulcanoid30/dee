import React from "react";
import "./blog.css";

function Blog() {
  return (
    <div>
      <div className="container">
        <div className="blog">
          <h1>Blog</h1>
        </div>
        <div className="blog-item">
          <div className="blog-i">
            {" "}
            <a className="b" href="/blogi">
              React App Todo List Using API
            </a>
            <br />
            <a
              className=" pro-list rounded-pill ps-3 pe-3 pt-1 pb-1"
              href="/blogi"
            >
              #JS
            </a>
            <a
              className=" pro-list ms-1 rounded-pill ps-3 pe-3 pt-1 pb-1"
              href="/blogi"
            >
              #REACT JS
            </a>
            <a
              className=" pro-list ms-1 rounded-pill ps-3 pe-3 pt-1 pb-1"
              href="/blogi"
            >
              #FETCH
            </a>
            <a className="b" href="/blogi">
              {" "}
              <p className="b2 secondary">
                A simple project using React is to create a Todo List whose data
                list is retrieved in a public API using the fetch method
              </p>
            </a>
          </div>
          <div className="blog-i">
            {" "}
            <a className="b" href="/blogic">
              React App Random Image Cat Using API
            </a>
            <br />
            <a
              className=" pro-list rounded-pill ps-3 pe-3 pt-1 pb-1"
              href="/blogic"
            >
              #JS
            </a>
            <a
              className=" pro-list ms-1 rounded-pill ps-3 pe-3 pt-1 pb-1"
              href="/blogic"
            >
              #REACT JS
            </a>
            <a
              className=" pro-list ms-1 rounded-pill ps-3 pe-3 pt-1 pb-1"
              href="/blogic"
            >
              #FETCH
            </a>
            <a className="b" href="/blogic">
              {" "}
              <p className="b2 secondary">
                A project using React is to create a random image cat using
                public api
              </p>
            </a>
          </div>
          <div className="blog-i">
            {" "}
            <a
              className="b"
              href="https://zlhyd.github.io/catImages/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React App guess gender by name using API
            </a>
            <br />
            <a
              className=" pro-list rounded-pill ps-3 pe-3 pt-1 pb-1"
              href="https://zlhyd.github.io/catImages/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #JS
            </a>
            <a
              className=" pro-list ms-1 rounded-pill ps-3 pe-3 pt-1 pb-1"
              href="https://zlhyd.github.io/catImages/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #REACT JS
            </a>
            <a
              className=" pro-list ms-1 rounded-pill ps-3 pe-3 pt-1 pb-1"
              href="https://zlhyd.github.io/catImages/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #FETCH
            </a>
            <a
              className="b"
              href="https://zlhyd.github.io/catImages/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p className="b2 secondary">
                A project using React to guess gender by their name using public
                API
              </p>
            </a>
          </div>
        </div>
        <footer>
          <p className="footer">
            ©️2022 Create With <i className="bi bi-heart-fill"></i> zLhYd
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Blog;
