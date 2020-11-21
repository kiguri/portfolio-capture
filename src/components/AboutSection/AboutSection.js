import home1 from '../../img/home1.png'
import {
    AboutContainer,
    Description,
    ImageWrapper,
    Image,
    Hide
} from './about.styles'

const AboutSection = () => {
    return ( 
        <AboutContainer>
            <Description>
                <div className='title'>
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact me for any photography or videography ideas that you have.
                    We have professionals with amzing skills
                </p>

                <button>Contact Us</button>
            </Description>
            <ImageWrapper>
                <Image src={home1} alt='home 1'/>
            </ImageWrapper>
        </AboutContainer>
     );
}
 
export default AboutSection;