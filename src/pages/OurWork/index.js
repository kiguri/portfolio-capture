import athlete from '../../img/athlete-small.png'
import theracer from '../../img/theracer-small.png'
import goodtimes from '../../img/goodtimes-small.png'

import { Link } from 'react-router-dom'

import {
    Work,
    WorkH2,
    Movie,
    Line,
    Img
} from './styles'

const OurWork = () => {
    return (
        <Work>
            <Movie>
                <WorkH2>The Athlete</WorkH2>
                <Line />
                <Link to='/work/the-athlete'>
                    <Img src={athlete} alt='athlete'/>
                </Link>
            </Movie>

            <Movie>
                <WorkH2>The Racer</WorkH2>
                <Line />
                <Link to='/work/the-racer'>
                    <Img src={theracer} alt='theracer'/>
                </Link>
            </Movie>

            <Movie>
                <WorkH2>Good Times</WorkH2>
                <Line />
                <Link to='/work/good-times'>
                    <Img src={goodtimes} alt='goodtimes'/>
                </Link>
            </Movie>
        </Work>
    );
};

export default OurWork;