import React from 'react';
import {
    InfoSec, 
    InfoRow, 
    InfoColumn, 
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements';
import {Container, Button} from '../../globalStyles';
import { Link } from 'react-router-dom';

const InfoSection = ({
    primary,
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightText, 
    lightTextDosc, 
    description, 
    headline, 
    buttonLabel,
    topLine,
    img,
    alt,
    start
}) => {
    return (
        <>
          <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDosc={lightTextDosc}>
                                {description}
                            </Subtitle>
                            <Link to='/sign-up'>
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
          </InfoSec>  
        </>
    )
}

export default InfoSection
