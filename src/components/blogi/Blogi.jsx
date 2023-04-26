import React from "react";
import "./blogi.css";
// import copy from "copy-to-clipboard";
import A from "../../components/image/a.png";
import B from "../../components/image/b.jpg";

function Blogi() {
  // const copyToClipboard = () => {
  //   copy(document.getElementsByClassName(".pre-back"));
  //   alert(`You have copied`);
  // };

  return (
    <div className="blog-l">
      <div className="blog-a">
        <div className="card text-bg-dark ">
          <img className="card-img" src={B} alt="gambar" />
          <div className="card-img-overlay">
            <h1 className="card-w-title">React Bored App</h1>
            <p className="card-w">
              📅 Create At 07-Oktober-2022 Using React By ZULHAYAD
            </p>
          </div>
        </div>
      </div>
      <div className="blog-b-img">
        <div className="blog-b mt-5">
          <img className="blog-img" src={A} alt="gambar" />
        </div>
      </div>
      <div className="appi">
        <div className="app-title">
          <h1>Bored App</h1>
        </div>
        <div className="app-desc">
          <p>
            Bored App adalah App sederhana menggunakan React sebagian
            frameworknya aplikasihnya sangat sederhana yaitu hanya mengambil API
            public kemudian data di tampilkan di browser dengan hanya mentriger
            tombol maka setiap kali tombolnya di tekan maka akan muncul data
            yang berbeda dari sebelumnya
          </p>
        </div>
        <div className="source">
          <h5>Source Code :</h5>
          <div className="source-code">
            <pre className="pre-back pt-4" id="foo">
              <code>
                <span className="import">import </span>
                <span className="import">React </span>
                <span className="import">from </span>
                <span>"react" ;</span>
              </code>
              <br />
              <code>
                <span className="import">const </span>
                <span className="bia">Test </span>
                <span>= </span>
                <span>() </span>
                <span>=&gt;</span>
                <span> &#123;</span>
                <br />
                <span>
                  {" "}
                  <span className="import">const</span> [datas, getDatas] =
                  <span className="bia"> useState</span>([&#123;&#125;]);
                </span>
                <br />
                <span>
                  {" "}
                  <span className="import">const</span>{" "}
                  <span className="bia">getBerry </span>={" "}
                  <span className="import">async</span> () =&gt; &#123;
                </span>
              </code>
              <br />
              <br />
              <code>
                <span className="api">
                  {" "}
                  <span className="import">const</span> api ={" "}
                  <span className="import">await </span>
                  <span className="bia">fetch</span>(
                  <span className="return ms-0">
                    "https://www.boredapi.com/api/activity/"
                  </span>
                  );
                </span>
                <br />
                <span className="api">
                  {" "}
                  <span className="import">const</span> getApi ={" "}
                  <span className="import">await </span>
                  api.<span className="bia">json()</span>;
                </span>
                <br />
                <span className="api">
                  {" "}
                  <span className="import">const</span> set ={" "}
                  <span className="import">new</span> Set([getApi]);
                </span>
                <br />
                <span className="api">
                  {" "}
                  <span className="import">const</span> result = Array.
                  <span className="bia">from</span>(set).
                  <span className="bia">map</span>((data) =&gt; &#123;
                </span>
                <br />
                <span className="return"> return &#123;</span>
                <br />
                <span className="data">
                  <span className="bia">activity</span>: data.
                  <span className="bia">activity</span>,{" "}
                </span>
                <br />
                <span className="data">
                  <span className="bia">key</span>: data.
                  <span className="bia">key</span>,
                </span>
                <br />
                <span className="return"> &#125;;</span>
                <br />
                <span className="api"> &#125;);</span>
                <br />
                <span className="api">
                  <span className="bia"> getDatas</span>(result);
                </span>
                <br />
                <span> &#125;;</span>
              </code>
              <br />
              <br />
              <code>
                <span>
                  {" "}
                  <span className="bia">useEffect</span>((){" "}
                  <span className="bia">=&gt; </span>
                  &#123;
                </span>
                <br />
                <span className="api">
                  {" "}
                  <span className="bia">getBerry</span>();
                </span>
                <br />
                <span> &#125;, []);</span>
              </code>
              <br />
              <br />
              <code>
                <span className="api">
                  <span className="import">return</span> (
                </span>
                <br />
                <span className="return"> &lt;div&gt;</span>
                <br />
                <span className="ms-4">
                  {" "}
                  <span className="return">&lt;div</span>{" "}
                  <span className="bia">className</span>="button-container"&gt;
                </span>
                <br />
                <span className="data">
                  {" "}
                  <span className="return">&lt;button </span>
                  <span className="bia">className</span>="btn"
                  <span className="bia"> onClick</span>=&#123;
                  <span className="bia">getBerry</span>&#125;&gt;
                </span>
                <br />
                <span className="todo return">
                  &lt;span&gt;<span className="text">Todo List</span>
                  &lt;span/&gt;
                </span>
                <br />
                <span className="data1 return"> &lt;/button&gt;</span>
                <br />
                <span className="data">
                  {" "}
                  <span className="return">&lt;p </span>
                  <span className="bia">className</span>="description"
                  <span className="bia"> key</span>=&#123;
                  <span className="bia">datas.[0]</span>&#125;&gt;
                  <br />
                  <span className="datas">
                    &#123;datas[0].<span className="bia">aktivity</span>&#125;
                  </span>
                  <br />
                  <span className="data return ms-5 ps-5">&lt;/p&gt;</span>
                </span>
                <br />
                <span className="return ms-5 ps-4">&lt;/div&gt;</span>
                <br />
                <span className="return"> &lt;/div&gt;</span>
                <br />
                <span className="ms-4">);</span>
                <br />
                <br />
                <br />
                <span className="import ms-4">export default Test</span>;
              </code>
            </pre>
          </div>
        </div>
        <div className="link">
          <h1>Link :</h1>
        </div>
        <div className="link-i">
          <div className="link-l">
            {" "}
            <a
              href="https://zlhyd.github.io/apiBored/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="dot">&#9679;</span> BoredApi
            </a>
          </div>
          <div className="link-l mt-3">
            <a
              href="https://github.com/zLhYd/apiBored"
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

export default Blogi;
