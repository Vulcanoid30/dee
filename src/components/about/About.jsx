import React from "react";
import "./about.css";

function About() {
  return (
    <div className="ab">
      <h2 className="zul">Zulhayad</h2>
      <p className="me">
        I am a software/frontend developer with 0 experience (professional) but
        I really like coding, I'm very passionate about technology and
        computers. I am reliable, can work in a team, and can learn quickly my
        interests are in frontend development. In my free time, i enjoy
        listening to music, gaming and reading. As well, I love to travel and
        see new places and meet new people.
      </p>
      <div className="work">
        {" "}
        <h2>👷- Currently Working On</h2>
        <p className="wo">
          <i class="bi bi-dot"></i> personal site : <a href="/">zLhYd</a>.
        </p>
        <p className="wo">
          <i class="bi bi-dot"></i> work from home.
        </p>
      </div>
      <div className="about2">
        {" "}
        <h2>🧑‍💻- About</h2>
        <p className="wo2">
          <i class="bi bi-dot"></i> Nama : Zulhayad
        </p>
        <p className="wo2">
          <i class="bi bi-dot"></i> Gender : Laki-laki
        </p>
        <p className="wo2">
          <i class="bi bi-dot"></i> Email : <a href="/">adigans221@gmail.com</a>
        </p>
        <p className="wo2">
          <i class="bi bi-dot"></i> Twitter :{" "}
          <a
            href="https://github.com/zLhYd"
            target="_blank"
            rel="noopener noreferrer"
          >
            @zLhYd
          </a>
        </p>
        <p className="wo2">
          <i class="bi bi-dot"></i> Git Hub :{" "}
          <a
            href="https://github.com/zLhYd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zulhayad
          </a>
        </p>
      </div>
      <div className="progres">
        <h2>2021</h2>
        <p className="wo3">
          <i class="bi bi-dot"></i> study at amikom University Yogyakarta
        </p>
        <p className="wo3">
          <i class="bi bi-dot"></i> graduated from State High School 1 Raha
        </p>
        <hr />
      </div>
      <div className="progres2">
        <h2>2003</h2>
        <p className="wo3">
          <i class="bi bi-dot"></i> i was born 🥚
        </p>
        <hr />
      </div>
    </div>
  );
}

export default About;
