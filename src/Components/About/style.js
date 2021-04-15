import styled from "styled-components";
import im from "./about-bg1.jpg";


export const Creative = styled.div`
  height: 500px;
  background: url(${im});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position:relative;
  @media(max-width:768px){
    height:400px;
  }
`

export const CreativeInfo = styled.div`
  padding: 30px 0 0 30px;
  width: 35%;
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  margin:0;
  background-color: rgb(253 247 245 / 92%);
  @media(max-width:768px){
    width: 50%;
    padding: 10px;
    margin:0;
  }
`

export const InfoTitle = styled.h2`
  font-weight: bold;
  font-size: 50px;
  margin-top:0;
  margin-bottom:20px;
  padding-top:75px;
  @media(max-width:1060px){
    font-size: 40px;
  }
  @media(max-width:768px){
    font-size: 30px;
    margin:0;
    padding:20px 0;
  }
`
export const User = styled.span`
  font-family: 'Pacifico',cursive;
  color:#000;
  font-weight:normal;
`
export const Span = styled.span`
  font-weight: normal;
`

export const InfoDir = styled.h4`
  font-size: 40px;
  color: #eb5424;
  margin-bottom: 15px;
  margin-top:15px;
  @media(max-width:1060px){
    font-size: 30px;
  }
  @media(max-width:768px){
    font-size: 20px;
    margin:0;
  }
`

export const InfoDesc = styled.p`
  color: #000;
  margin-bottom: 15px;
  line-height: 1.8;
  padding:20px;
  @media(max-width:768px){
    padding:10px;
    line-height: 1.6;
  }
`



