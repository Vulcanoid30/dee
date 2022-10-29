import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Project from "./components/project/Project";
import { Routes, Route } from "react-router-dom";
import Blogi from "./components/blogi/Blogi";
import Blogic from "./components/blogic/Blogic";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="dee" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blogi" element={<Blogi />} />
        <Route path="blogic" element={<Blogic />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
