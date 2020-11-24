import clock from '../../img/clock.svg'
import diaphragm from '../../img/diaphragm.svg'
import money from '../../img/money.svg'
import teamwork from '../../img/teamwork.svg'
import home2 from '../../img/home2.png'

import {
    ServicesContainer,
    Description,
    ImageWrapper,
    Image,
    ServicesH2,
    Cards,
    Card,
    CardIcon,
    CardP,
    CardH3
} from './services.styles'

const ServicesSection = () => {
    return ( 
        <ServicesContainer>
            <Description>
                <ServicesH2>High <span>quality</span> services</ServicesH2>
                <Cards>
                    <Card>
                        <CardIcon>
                            <img src={clock} alt='clock icon'/>
                            <CardH3>Efficient</CardH3>
                        </CardIcon>
                        <CardP>Lorem ipsum dolor sit amet.</CardP>
                    </Card>

                    <Card>
                        <CardIcon>
                            <img src={teamwork} alt='teamwork icon'/>
                            <CardH3>Teamwork</CardH3>
                        </CardIcon>
                        <CardP>Lorem ipsum dolor sit amet.</CardP>
                    </Card>

                    <Card>
                        <CardIcon>
                            <img src={diaphragm} alt='diaphragm icon'/>
                            <CardH3>Diaphragm</CardH3>
                        </CardIcon>
                        <CardP>Lorem ipsum dolor sit amet.</CardP>
                    </Card>

                    <Card>
                        <CardIcon>
                            <img src={money} alt='money icon'/>
                            <CardH3>Affordable</CardH3>
                        </CardIcon>
                        <CardP>Lorem ipsum dolor sit amet.</CardP>
                    </Card>
                </Cards>
            </Description>
            <ImageWrapper>
                <Image src={home2} alt='home' />
            </ImageWrapper>
        </ServicesContainer> 
    );
}
 
export default ServicesSection;