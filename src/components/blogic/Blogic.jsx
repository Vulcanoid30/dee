import React from "react";
import C from "../../components/image/c.png";
import B from "../../components/image/b.jpg";

function blogic() {
  return (
    <div className="blog-l">
      <div className="blog-a">
        <div className="card text-bg-dark ">
          <img className="card-img" src={B} alt="gambar" />
          <div className="card-img-overlay">
            <h1 className="card-w-title">React Cat App</h1>
            <p className="card-w">
              📅 Create At 16-Oktober-2022 Using React By ZULHAYAD
            </p>
          </div>
        </div>
      </div>
      <div className="blog-b-img">
        <div className="blog-b mt-5">
          <img className="blog-img" src={C} alt="gambar" />
        </div>
      </div>
      <div className="appi">
        <div className="app-title">
          <h1>Cat App</h1>
        </div>
        <div className="app-desc">
          <p>
            Cat App adalah App sederhana menggunakan React sebagian frameworknya
            aplikasihnya sangat sederhana yaitu hanya mengambil API public
            kemudian gambar akan di tampilkan di browser dengan hanya mentriger
            tombol maka setiap kali tombolnya di tekan maka akan muncul gambar
            yang berbeda dari sebelumnya
          </p>
        </div>
        <div className="source">
          <h5>Source Code :</h5>
          <div className="source-code">
            <pre className="pre-back pt-4">
              <code>
                <span className="import">import </span>
                <span className="import">React </span>
                <span className="import">from </span>
                <span>"react" ;</span>
              </code>
              <br />
              <code>
                <span className="import">const </span>
                <span className="bia">Cat </span>
                <span>= </span>
                <span>() </span>
                <span>=&gt;</span>
                <span> &#123;</span>
                <br />
                <span>
                  {" "}
                  <span className="import">const</span> [images, getImages] =
                  <span className="bia"> useState</span>([&#123;&#125;]);
                </span>
                <br />
                <span>
                  {" "}
                  <span className="import">const</span>{" "}
                  <span className="bia">Api </span>={" "}
                  <span className="import">async</span> () =&gt; &#123;
                </span>
              </code>
              <br />
              <br />
              <code>
                <span className="api">
                  {" "}
                  <span className="import">const</span> dee ={" "}
                  <span className="import">await </span>
                  <span className="bia">fetch</span>(
                  <span className="return ms-0">
                    "https://api.thecatapi.com/v1/images/search"
                  </span>
                  );
                </span>
                <br />
                <span className="api">
                  {" "}
                  <span className="import">const</span> deeApi ={" "}
                  <span className="import">await </span>
                  dee.<span className="bia">json()</span>;
                </span>
                <br />
                <span className="api">
                  {" "}
                  <span className="import">const</span> result = deeApi.
                  <span className="bia">map</span>((data) =&gt; &#123;
                </span>
                <br />
                <span className="return"> return &#123;</span>
                <br />
                <span className="data">
                  <span className="bia">id</span>: data.
                  <span className="bia">id</span>,{" "}
                </span>
                <br />
                <span className="data">
                  <span className="bia">url</span>: data.
                  <span className="bia">url</span>,
                </span>
                <br />
                <span className="return"> &#125;;</span>
                <br />
                <span className="api"> &#125;);</span>
                <br />
                <span className="api">
                  <span className="bia"> getImages</span>(result);
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
                  <span className="bia">Api</span>();
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
                  <span className="bia">className</span>="container center"&gt;
                </span>
                <br />
                <span className="todo return">
                  &lt;h2&gt;<span className="text">get images</span>
                  &lt;h2/&gt;
                </span>
                <br />
                <span className="data">
                  {" "}
                  <span className="return">&lt;img </span>
                  <span className="bia">className</span>="description"
                  <span className="bia"> key</span>=&#123;
                  <span className="bia">images.id</span>&#125;
                  <span className="bia"> src=&#123;images.url&#125;/</span>&gt;
                </span>
                <br />
                <span className="data">
                  {" "}
                  <span className="return">&lt;button </span>
                  <span className="bia">className</span>="btn"
                  <span className="bia"> onClick</span>=&#123;
                  <span className="bia">Api</span>&#125;&gt;
                  <span>Get Random Cat Images</span>
                  <span className="return ms-0">&lt;button/&gt;</span>
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
                <span className="import ms-4">export default Cat</span>;
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
              href="https://zlhyd.github.io/catImages/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="dot">&#9679;</span> catApi
            </a>
          </div>
          <div className="link-l mt-3">
            <a
              href="https://github.com/zLhYd/catImages"
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

export default blogic;
