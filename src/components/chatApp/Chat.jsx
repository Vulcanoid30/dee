import React from "react";
import { Link } from "react-router-dom";
import B from "../image/b.jpg";
// import D from "../image/d.png";
import E from "../image/e.png";

function Chat() {
  return (
    <div className="blog-l">
      <div className="blog-a">
        <div className="card text-bg-dark ">
          <img className="card-img" src={B} alt="gambar" />
          <div className="card-img-overlay">
            <h1 className="card-w-title">React Chat App</h1>
            <p className="card-w">
              📅 Create At 12-mei-2023 Using React By ZULHAYAD
            </p>
          </div>
        </div>
      </div>
      <div className="blog-b-img">
        <div className="blog-b mt-5">
          <img className="blog-img" src={E} alt="gambar" />
        </div>
      </div>
      <div className="appi">
        <div className="app-title">
          <h1>Chat App</h1>
        </div>
        <div className="app-desc">
          <p>
            zLhYd ChatApp adalah App real time chat sederhana yang di buat
            menggunakan ReactJs dan Firebase
          </p>
        </div>
        <div className="link">
          <h1>Link :</h1>
        </div>
        <div className="link-i">
          <div className="link-l">
            {" "}
            <a
              href="https://zlhyd.github.io/chats/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="dot">&#9679;</span> ChatApp
            </a>
          </div>
          <div className="link-l mt-3">
            <a
              href="https://github.com/zLhYd/chats/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="dot">&#9679;</span> Github
            </a>
          </div>
        </div>
      </div>
      <footer>
        <p className="foot d-flex justify-content-center">
          ©️2022 Create With ❤️ zLhYd
        </p>
      </footer>
    </div>
  );
}

export default Chat;
