import './Hero.css';
import Decoracion from './../assets/Decoración.png'


function Hero() {
  return (
    <section className="hero">
       <div className="decoracion-derecha">
<img src={Decoracion} alt="Decoración" />
</div>
      <div className="hero-texto">
        <h1 className="hero-titulo">
          We make your music <br />
          <span>sound extraordinary.</span>
        </h1>
        <p className="hero-descripcion">
         A system audio equalizer specifically designes for Android and iOS, Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb and more! 
        </p>
      </div>

    </section>
  );
}

export default Hero;
