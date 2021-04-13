import React from 'react';
import { PortfolioSection, PortfolioTitle, Span, ImageWrapper, OverlaySpan, Overlay, Image, Hr, ImgWind } from "./style.js";
import{portfolio} from "./portfolio.js";





const Portfolio = () => {
    const PortfolioImages = portfolio.map((ImageItem) => {
        const handleShow =()=>{
            const imgWind=document.getElementById('imgWind');
            const newImg = document.createElement('img');
            imgWind.style.display='flex';
            imgWind.style.zIndex=200;
            newImg.src=ImageItem.image;
            newImg.alt=ImageItem.id;

            if(window.innerWidth<=712){
                newImg.style.width='97vw';
                newImg.style.height='50vh';
            }else{
                newImg.style.width='50vw';
                newImg.style.height='80vh';
            }

            imgWind.appendChild(newImg);

            imgWind.addEventListener('click',()=>{
                imgWind.style.display='none';
                newImg.remove();
            })
        }
        return (
            <ImageWrapper key={ImageItem.id} >
                <Image src={ImageItem.image}  />
                <Overlay>
                    <OverlaySpan onClick={handleShow} >
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
        )
    })
    return (
        <PortfolioSection id="portfolio">
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <Hr/>
            <ImgWind id="imgWind"></ImgWind>
            <div className="box">
                {PortfolioImages}
            </div>
        </PortfolioSection>
    );
}
export default Portfolio;