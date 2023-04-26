import React from "react";
import D from "../../components/image/d.png";
import B from "../../components/image/b.jpg";

function Blogapig() {
  return (
    <div className="blog-l">
      <div className="blog-a">
        <div className="card text-bg-dark ">
          <img className="card-img" src={B} alt="gambar" />
          <div className="card-img-overlay">
            <h1 className="card-w-title">React Gender App</h1>
            <p className="card-w">
              📅 Create At 25-Oktober-2022 Using React By ZULHAYAD
            </p>
          </div>
        </div>
      </div>
      <div className="blog-b-img">
        <div className="blog-b mt-5">
          <img className="blog-img" src={D} alt="gambar" />
        </div>
      </div>
      <div className="appi">
        <div className="app-title">
          <h1>Gender App</h1>
        </div>
        <div className="app-desc">
          <p>
            Gender App adalah App sederhana yang di buat menggunakan React dan
            datanya menggunakan API public yang kegunaan aplikasihnya yaitu
            menebak gender seseorang berdasarkan nama mereka dan kemudian data
            tersebut akan muncul di halaman Webnya
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
                <span className="bia">App </span>
                <span>= </span>
                <span>() </span>
                <span>=&gt;</span>
                <span> &#123;</span>
                <br />
                <br />
                <span>
                  {" "}
                  <span className="import">const</span> [player, getPlayer] =
                  <span className="bia"> useState</span>([&#123;&#125;]);
                </span>
                <br />
                <span>
                  {" "}
                  <span className="import">const</span> [search, setSearch] =
                  <span className="bia"> useState</span>("");
                </span>
                <br />
                <br />
                <span>
                  <span className="import"> const</span>{" "}
                  <span className="bia">changeValue </span>={" "}
                  <span className="import"></span>(data) =&gt; &#123;
                  <br />
                  <span> setSearch(data.target.value);</span>
                  <br />
                  <span>&#125;;</span>
                </span>
                <br />
                <br />
                <span>
                  {" "}
                  <span className="import">const</span>{" "}
                  <span className="bia">Anjay </span>={" "}
                  <span className="import">async</span> () =&gt; &#123;
                </span>
              </code>
              <br />
              <code>
                <span className="api">
                  {" "}
                  <span className="import">const</span> api ={" "}
                  <span className="import">await </span>
                  <span className="bia">fetch</span>(
                  <span className="return ms-0">
                    `https://api.genderize.io/?name=$
                    <span>&#123;search &#125;</span>
                  </span>
                  `);
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
                  <span className="bia">hitung</span>: data.
                  <span className="bia">count</span>,{" "}
                </span>
                <br />
                <span className="data">
                  <span className="bia">jenis</span>: data.
                  <span className="bia">gender</span>,
                </span>
                <br />
                <span className="data">
                  <span className="bia">nama</span>: data.
                  <span className="bia">name</span>,{" "}
                </span>
                <br />
                <span className="data">
                  <span className="bia">kemungkinan</span>: data.
                  <span className="bia">probability</span>,
                </span>
                <br />
                <span className="return"> &#125;;</span>
                <br />
                <span className="api"> &#125;);</span>
                <br />
                <span className="api">
                  <span className="bia"> getPlayer</span>(result);
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
                  <span className="bia">Anjay</span>();
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
                  <span className="bia">className</span>="input"&gt;
                </span>
                <br />
                <span className="data">
                  {" "}
                  <span className="return">&lt;input </span>
                  <span className="bia">className</span>="btn"
                  <span className="bia"> onChange</span>=&#123;
                  <span className="bia">changeValue</span>&#125;/&gt;
                </span>
                <br />
                <span className="data">
                  {" "}
                  <span className="return">&lt;p </span>
                  <span className="bia">key</span>=&#123;
                  <span className="bia">player[0].hitung</span>&#125;&gt;
                  <span className="datas ms-0">
                    &#123;player[0].<span className="bia">hitung</span>&#125;
                  </span>
                  <span className="data return ms-0">&lt;/p&gt;</span>
                </span>
                <br />
                <span className="data">
                  {" "}
                  <span className="return">&lt;p </span>
                  <span className="bia">key</span>=&#123;
                  <span className="bia">player[0].nama</span>&#125;&gt;
                  <span className="datas ms-0">
                    &#123;datas[0].<span className="bia">nama</span>&#125;
                  </span>
                  <span className="data return ms-0">&lt;/p&gt;</span>
                </span>
                <br />
                <span className="data">
                  {" "}
                  <span className="return">&lt;p </span>
                  <span className="bia">key</span>=&#123;
                  <span className="bia">datas[0].jenis</span>&#125;&gt;
                  <span className="datas ms-0">
                    &#123;datas[0].<span className="bia">jenis</span>&#125;
                  </span>
                  <span className="data return ms-0">&lt;/p&gt;</span>
                </span>
                <br />
                <span className="data">
                  {" "}
                  <span className="return">&lt;p </span>
                  <span className="bia">key</span>=&#123;
                  <span className="bia">datas[0].kemungkinan</span>&#125;&gt;
                  <span className="datas ms-0">
                    &#123;datas[0].<span className="bia">kemungkinan</span>
                    &#125;
                  </span>
                  <span className="data return ms-0">&lt;/p&gt;</span>
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
                <span className="import ms-4">export default Api</span>;
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
              href="https://zlhyd.github.io/genderApi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="dot">&#9679;</span> GenderApi
            </a>
          </div>
          <div className="link-l mt-3">
            <a
              href="https://github.com/zLhYd/genderApi/"
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

export default Blogapig;
