import React from 'react';
import { Hom, HomInfo, HomeInformation, HomeBtn, HomeDesc, HomeTitle, Span } from './style';


const Home = () => {
    return (
        <Hom>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Hazem Khaleel</HomeTitle>
                    <HomInfo>Creative Director</HomInfo>
                    <HomeDesc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </Hom>
    );
}
export default Home;