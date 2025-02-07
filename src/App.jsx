import Test from "./Test";
import "./app.scss"
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/navbar/hero/Hero";
import Parallax from "./component/parallax/Parallax";
import Portfolio from "./component/portfolio/Portfolio";
import Services from "./component/services/Services";


const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>     
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id= "Portfolio "><Parallax type="portfolio"/></section>
    <Portfolio/>
    
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section> 
   {/*<Test/>
   <Test/>*/}
  </div>;
};

export default App;
