import React from 'react';
import { PortfolioSection, PortfolioTitle, Span, ImageWrapper, OverlaySpan, Overlay, Image, Hr, ImgWind, Img } from "./style.js";
import{portfolio} from "./portfolio.js";





const Portfolio = () => {
    const PortfolioImages = portfolio.map((ImageItem) => {
        const handleShow =()=>{
            const imgWind=document.getElementById('imgWind');
            const newImg = document.createElement('img');
            const Img =document.getElementById('img');
            imgWind.style.display='flex';
            imgWind.style.zIndex=200;
            newImg.src=ImageItem.image;
            newImg.alt=ImageItem.id;
            newImg.style.width='100%';
            newImg.style.height='100%';
            

            Img.appendChild(newImg);

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
                        Show Me
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
        )
    })
    return (
        <PortfolioSection id="portfolio">
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <Hr/>
            <ImgWind id="imgWind">
                <Img id="img" ></Img>
            </ImgWind>
            <div className="box">
                {PortfolioImages}
            </div>
        </PortfolioSection>
    );
}
export default Portfolio;