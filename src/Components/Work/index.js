import React from 'react';
import { WorkSection, WorkTitle, Span, Page, Hr } from "./style.js";


const Work =()=> {
    
        return (
            <WorkSection id="work">
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    <Hr/>
                    <Page src="https://shhm8905.github.io/rock-game/"></Page>
                    <Page src="https://shhm8905.github.io/Transfer-App/"></Page>
                </div>
            </WorkSection>
        );
    
}

export default Work; 