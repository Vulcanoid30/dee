import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";

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
            <Link className="b" to="/blogi">
              React App Todo List Using API
            </Link>
            <br />
            <Link
              className=" pro-list rounded-pill ps-3 pe-3 pt-1 pb-1"
              to="/blogi"
            >
              #JS
            </Link>
            <Link
              className=" pro-list ms-1 rounded-pill ps-3 pe-3 pt-1 pb-1"
              to="/blogi"
            >
              #REACT JS
            </Link>
            <Link
              className=" pro-list ms-1 rounded-pill ps-3 pe-3 pt-1 pb-1"
              to="/blogi"
            >
              #FETCH
            </Link>
            <Link className="b" to="/blogi">
              {" "}
              <p className="b2 secondary">
                A simple project using React is to create Link Todo List whose
                data list is retrieved in Link public API using the fetch method
              </p>
            </Link>
          </div>
          <div className="blog-i">
            {" "}
            <Link className="b" to="/blogic">
              React App Random Image Cat Using API
            </Link>
            <br />
            <Link
              className=" pro-list rounded-pill ps-3 pe-3 pt-1 pb-1"
              to="/blogic"
            >
              #JS
            </Link>
            <Link
              className=" pro-list ms-1 rounded-pill ps-3 pe-3 pt-1 pb-1"
              to="/blogic"
            >
              #REACT JS
            </Link>
            <Link
              className=" pro-list ms-1 rounded-pill ps-3 pe-3 pt-1 pb-1"
              to="/blogic"
            >
              #FETCH
            </Link>
            <Link className="b" to="/blogic">
              {" "}
              <p className="b2 secondary">
                A project using React is to create Link random image cat base
                their name using public API
              </p>
            </Link>
          </div>
          <div className="blog-i">
            {" "}
            <Link
              className="b"
              to="https://zlhyd.github.io/catImages/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React App guess gender by name using API
            </Link>
            <br />
            <Link
              className=" pro-list rounded-pill ps-3 pe-3 pt-1 pb-1"
              to="https://zlhyd.github.io/catImages/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #JS
            </Link>
            <Link
              className=" pro-list ms-1 rounded-pill ps-3 pe-3 pt-1 pb-1"
              to="https://zlhyd.github.io/catImages/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #REACT JS
            </Link>
            <Link
              className=" pro-list ms-1 rounded-pill ps-3 pe-3 pt-1 pb-1"
              to="https://zlhyd.github.io/catImages/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #FETCH
            </Link>
            <Link
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
            </Link>
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
