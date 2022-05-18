import { useEffect } from "react";
import "./styles.css";
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

export default function Projects_Page() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <div className="projects-page">
        <Projects />
      </div>
      <Footer />
    </>
  );
}