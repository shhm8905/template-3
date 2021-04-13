import React from 'react';
import { Creative, CreativeInfo, InfoTitle, Span, InfoDir, InfoDesc, User } from './style.js';

const About = () => {
    return (
        <Creative id="about">
            <CreativeInfo>
                <InfoTitle><Span>This is</Span> Me</InfoTitle>
                <InfoDir>Creative Developer <User>Hazem Kh</User> </InfoDir>
                <InfoDesc>
                I am convinced that I will be a great programmer because I have the interest and always want to do the best job possible.
                </InfoDesc>
            </CreativeInfo>
        </Creative>
    );
}
export default About;