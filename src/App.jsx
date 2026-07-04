import { useState } from 'react'
import { useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import { Toaster } from "react-hot-toast";
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <Toaster
    position="top-center"
    gutter={12}
    toastOptions={{
      duration: 4000,

      style: {
        background: "rgba(17,17,17,.85)",
        color: "#fff",
        border: "1px solid rgba(34,211,238,.25)",
        backdropFilter: "blur(18px)",
        borderRadius: "18px",
        padding: "18px 22px",
        boxShadow: "0 20px 60px rgba(0,0,0,.45)",
        fontSize: "15px",
        maxWidth: "420px",
      },

      success: {
        iconTheme: {
          primary: "#22d3ee",
          secondary: "#111",
        },
      },

      error: {
        iconTheme: {
          primary: "#ef4444",
          secondary: "#111",
        },
      },
  }}
/>
      <Loader loading={loading} />

      <div
        className={`transition-all duration-700 ${
          loading
            ? "opacity-0 translate-y-10"
            : "opacity-100 translate-y-0"
        }`}
      >
        
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
    );
}

export default App
