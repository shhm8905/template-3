import React from 'react';
import { PortfolioSection, PortfolioTitle, PortfolioList, PortfolioItem, Span, ImageWrapper, OverlaySpan, Overlay, Image } from "./style.js";
import axios from 'axios';
import { useState, useEffect } from "react";

const Portfolio = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get('../../../data.json').then(res => { setImages(res.data.portfolio) })
    }, [])
    const PortfolioImages = images.map((ImageItem) => {
        return (
            <ImageWrapper key={ImageItem.id} >
                <Image src={ImageItem.image} alt="" />
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
            <PortfolioList>
                <PortfolioItem>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>

            <div className="box">

                {PortfolioImages}

            </div>

        </PortfolioSection>
    );
}
export default Portfolio;