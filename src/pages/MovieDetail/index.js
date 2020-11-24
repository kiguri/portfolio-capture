import { useState, useEffect } from 'react'
import { data } from '../../data'

import {
    Details,
    HeadLine,
    HeadLineH2,
    Img,
    Awards,
    AwardWrap,
    AwardH3,
    Line,
    AwardText,
    ImgDisplay,
    SecondImg
} from './styles'

const MovieDetail = ({ history }) => {
    const [movies, setMovies] = useState(data)
    const [movie, setMovie] = useState(null)
    const url = history.location.pathname

    useEffect(() => {
        const currentMovie = movies.find(movie => movie.url === url)
        setMovie(currentMovie)
    }, [movies, url]);

    return ( 
        <>
        {(movie && 
            <Details>
                <HeadLine>
                    <HeadLineH2>{movie.title}</HeadLineH2>
                    <Img src={movie.mainImg} alt={movie.title}/>
                </HeadLine>
                <Awards>
                    {movie.awards.map(award => (
                        <Award 
                            title={award.title}
                            description={award.description}
                            key={award.url}
                            />
                    ))}
                </Awards>
                <ImgDisplay>
                    <SecondImg src={movie.secondaryImg} alt='movie' />   
                </ImgDisplay>
             </Details>
        )}
        </>
     );
}

const Award = ({title, description}) => {
    return (  
        <AwardWrap>
            <AwardH3>{title}</AwardH3>
            <Line />
            <AwardText>{description}</AwardText>
        </AwardWrap>
    );
}
 
 
export default MovieDetail;