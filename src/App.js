
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className="circulo circulo1"></div>
      <div className="circulo circulo2"></div>
      <div className="circulo circulo3"></div>

      <Header />
      <Hero />
      <Pricing />
      <Footer />


    </div>
  );
}

export default App;
