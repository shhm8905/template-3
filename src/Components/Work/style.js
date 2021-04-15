import styled from "styled-components";

export const WorkSection = styled.div`
  height: auto;
  padding: 30px 0;
  overflow: hidden;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23dddddd'/%3E%3Cstop offset='1' stop-color='%23eeeeee'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='68' height='68' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='34' cy='34' r='34'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.34'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  text-align: -webkit-center;
  @media screen and (max-width:1916px){
    text-align: -webkit-center;
  }
  @media screen and(max-width:1024px){
    width:100%;
  }
  @media screen and(max-width:768px){
    padding:0;
  }
  
`

export const WorkTitle = styled.h2`
  font-size: 60px;
  text-align:center;
  margin-bottom:0;
  @media(max-width:1000px){
    font-size:40px;
  }
  @media(max-width:768px){
    font-size:30px;
    margin:0;
  }
`

export const Span = styled.span`
  font-weight: normal;
`

export const Page = styled.iframe`
  width:765px;
  height:800px;
  margin:20px;
  @media screen and (max-width:1000px){
    text-align: -webkit-center;
    height:700px;
    width:95%;
  }
  @media screen and (max-width:768px){
    width:100%;
    margin:0;
  }
  @media screen and (max-width:400px){
    height:500px;
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
    width: 240px;
    margin-bottom: 50px;
  }
  @media screen and (max-width:768px){
    width: 200px;
    margin-bottom: 35px;
  }
`