import styled from "styled-components";

export const PortfolioSection = styled.div`
  padding-top: 20px;
  padding-bottom:80px;
  overflow: hidden;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23000000'/%3E%3Cstop offset='1' stop-color='%23616161'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.1'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  @media(max-width:768px){
    padding:30px 0;
  }
`

export const PortfolioTitle = styled.h2`
  text-align: center;
  font-size: 60px;
  margin-bottom:0;
  color:#fff;
  @media(max-width:1000px){
    font-size: 40px;
  }
  @media(max-width:768px){
    font-size: 25px;
    margin:0;
  }
`

export const Span = styled.span`
  font-weight: normal;
`

export const ImageWrapper = styled.div`
  width: 25%;
  float: left;
  font-size: 0;
  position: relative;
  @media(max-width:1024px){
    width: 50%;
  }
  @media screen and (max-width:500px){
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
  transition: opacity 0.8s ease-in-out;
  &:hover{ opacity: 1};
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
  color:#eb5424;
  @media screen and (max-width:1000px){
    padding:10px;
  }
`
export const Hr = styled.hr`
  display: block;
  height: 7px;
  background-color: #eb5424;
  width: 429px;
  border: none;
  margin-bottom: 80px;
  @media screen and (max-width:1000px){
    width: 276px;
    margin-bottom: 50px;
  }
  @media screen and (max-width:768px){
    width: 200px;
    margin-bottom: 35px;
  }
`

export const ImgWind = styled.div`
  position:fixed;
  top:0;
  left:0;
  align-items:center;
  justify-content:center;
  height:100vh;
  width:100vw;
  background-color:rgba(235,84,36,0.5);
  text-align:center;
  display:none;
`
export const Img = styled.div`
  width:50vw;
  height:80vh;
  @media screen and (max-width:1024px){
    width:80vw;
    height:60vh;
  }
  @media screen and (max-width:768px){
    width:90vw;
    height:50vh;
  }
  @media screen and (max-width:500px){
    width:100vw;
    height:50vh;
  }

`