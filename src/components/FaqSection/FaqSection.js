import {
    FaqContainer,
    FaqH2,
    FaqSpan,
    FaqLine,
    Question,
    AnswersContainer,
    Answer
} from './faq.styles'

const FaqSection = () => {
    return ( 
        <FaqContainer>
            <FaqH2>Any questions <FaqSpan>FAQ</FaqSpan></FaqH2>
            <Question>
                <h4>How Do I Start</h4>
                <AnswersContainer>
                    <Answer>Lorem ipsum dolor sit amet consectetur.</Answer>
                    <Answer>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur!</Answer>
                </AnswersContainer>
                <FaqLine />
            </Question>

            <Question>
                <h4>Daily Schedule</h4>
                <AnswersContainer>
                    <Answer>Lorem ipsum dolor sit amet consectetur.</Answer>
                    <Answer>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur!</Answer>
                </AnswersContainer>
                <FaqLine />
            </Question>

            <Question>
                <h4>Diferrent Payment Methods</h4>
                <AnswersContainer>
                    <Answer>Lorem ipsum dolor sit amet consectetur.</Answer>
                    <Answer>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur!</Answer>
                </AnswersContainer>
                <FaqLine />
            </Question>

            <Question>
                <h4>What Products do you offer</h4>
                <AnswersContainer>
                    <Answer>Lorem ipsum dolor sit amet consectetur.</Answer>
                    <Answer>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tenetur!</Answer>
                </AnswersContainer>
                <FaqLine />
            </Question>
        </FaqContainer>
     );
}
 
export default FaqSection;