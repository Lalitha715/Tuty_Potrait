import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Gifts from "./components/Gifts";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(){
  return(
    <>
      <Navbar />
      <main>
      <Hero />
      <Features />
      <Gifts />
      <Services />
      <Contact />
      </main>
      <Footer />
    </>
  )
}
export default App;