import React from 'react';
import { Hom, HomInfo, HomeInformation, HomeBtn, HomeDesc, HomeTitle, Span } from './style';


const Home = () => {
    return (
        <Hom id="home">
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Welcome to my page</HomeTitle>
                    <HomeDesc>
                     <HomInfo>Creative Developer</HomInfo>  
                    I'm Hazem from Syria, and I do content on <Span>Design and Development</Span>. 
                    I really enjoy working with programming and coding with &nbsp;
                    <Span>React and React Native</Span>, as well as work in Back-end like &nbsp;
                    <Span>node.js</Span> and database like <Span>mongoDB</Span>. 
                    I also enjoy wireframing <Span>UI, UX</Span> and design in general.
                    </HomeDesc>
                    <HomeBtn href="https://github.com/shhm8905" target='_blank' >Let's see my profile on github</HomeBtn>
                </HomeInformation>
            </div>
        </Hom>
    );
}
export default Home;