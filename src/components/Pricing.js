import './Pricing.css';
import { FaApple, FaAndroid } from 'react-icons/fa';
import Celular from './../assets/Celular.png';

function Pricing() {
    return (
        <section className='pricing'>
            <div className='tarjeta'>
                <h3 className='pricing-titulo'>Premium EQ </h3>
                <p className='pricing-informacion'>
                    Get expert-level control with a roboust equalizer, volume mixer, and spatial audio.
                    Take your listening experience to a whole new level and access all pur incredible features!
                </p>
                <div className='pricing-precio'>
                    <span className='dinero'>$</span>4
                    <p className='periodo'>/month</p>
                </div>
                <div className='buttons'>
                    <button className='ios'>
                        <FaApple className='icon-ios' />
                        iOS Download</button>
                    <button className='android'>
                        <FaAndroid className='icon-android' /> Android Download</button>
                </div>
                <div className="princing-imagen">
                    <img src={Celular} alt="Equalizer app celular" />
                </div>
            </div>
        </section>
    );
}
export default Pricing;
