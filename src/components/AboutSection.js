import home1 from '../img/home1.png'

const AboutSection = () => {
    return ( 
        <>
            <div className='description'>
                <div className='title'>
                    <div className='hide'>
                        <h2>We work to make</h2>
                    </div>
                    <div className='hide'>
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className='hide'>
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact me for any photography or videography ideas that you have.
                    We have professionals with amzing skills
                </p>
                <button>Contact Us</button>
            </div>
            <div className='hide'>
                <img src={home1} alt='home 1'/>
            </div>
        </>
     );
}
 
export default AboutSection;