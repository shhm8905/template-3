import React from 'react';
import { PortfolioSection, PortfolioTitle, Span, ImageWrapper, OverlaySpan, Overlay, Image } from "./style.js";
import{portfolio} from "./portfolio.js";



const Portfolio = () => {
        

    
    const PortfolioImages = portfolio.map((ImageItem) => {
        return (
            <ImageWrapper key={ImageItem.id} >
                <Image src={ImageItem.image}  />
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
        )
    })
    return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            

            <div className="box">

                {PortfolioImages}

            </div>

        </PortfolioSection>
    );
}
export default Portfolio;