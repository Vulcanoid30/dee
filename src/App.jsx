import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Project from "./components/project/Project";
import { Routes, Route } from "react-router-dom";
import Blogi from "./components/blogi/Blogi";
import Blogic from "./components/blogic/Blogic";
import Blogapig from "./components/blogapig/Blogapig";
import Chat from "./components/chatApp/Chat";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="dee" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blogi" element={<Blogi />} />
        <Route path="blogic" element={<Blogic />} />
        <Route path="blogapig" element={<Blogapig />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="chatApp" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default App;
