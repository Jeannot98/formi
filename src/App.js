import Header from "./components/header/Header";
import './app.scss'
import MainSection from "./sections/mainSection/MainSection";
import Second from "./sections/second/Second";
import Testimonials from "./sections/testimonials/Testimonials";
import Footer from "./sections/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <MainSection/>
      <Second/>
      <Testimonials/>
      <Footer/>
      
    </div>
  );
}

export default App;
