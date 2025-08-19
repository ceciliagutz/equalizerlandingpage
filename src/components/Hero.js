import './Hero.css';
import Celular from './../assets/Celular.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-texto">
        <h1 className="hero-titulo">
          We make your music <br />
          <span>sound extraordinary.</span>
        </h1>
        <p className="hero-descripcion">
         A system audio equalizer specifically designes for Android and iOS, Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb and more! 
        </p>
      </div>

      <div className="hero-imagen">
        <img src={Celular} alt="Equalizer app celular" />
      </div>
    </section>
  );
}

export default Hero;
