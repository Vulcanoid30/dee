import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Project from "./components/project/Project";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Blogi from "./components/blogi/Blogi";
import Blogic from "./components/blogic/Blogic";

const App = () => {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/dee" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blogi" element={<Blogi />}></Route>
          <Route path="/blogic" element={<Blogic />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Project />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
