import styled from "styled-components";

export const PortfolioSection = styled.div`
  background: #f8f8f8;
  padding-top: 20px;
  overflow: hidden;
  @media(max-width:768px){
    padding:0;
  }
`

export const PortfolioTitle = styled.h2`
  text-align: center;
  font-size: 35px;
  @media(max-width:400px){
    font-size: 25px;
  }
`

export const Span = styled.span`
  font-weight: normal;
`

export const PortfolioList = styled.ul`
  list-style: none;
  text-align: center;
  padding:0;
  margin: 20px 0;
`

export const PortfolioItem = styled.li`
  display: inline-block;
  width: 100px;
  padding: 10px;
  &:hover{
    background: #eb5424;
    color: #fff;
  }
  @media(max-width:768px){
    display: block;
    margin: auto;
  }
`

export const ImageWrapper = styled.div`
  width: 25%;
  float: left;
  font-size: 0;
  position: relative;
  &:hover > div { opacity: 1};
  @media(max-width:768px){
    width: 50%;
  }
  @media(max-width:400px){
    width: 100%;
  }
`

export const Image = styled.img`
  width: 100%;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(235, 84, 36, 0.5);
  font-size: 15px;
  opacity: 0;
  margin:0;
`

export const OverlaySpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  display: block;
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid #eb5424;
`

