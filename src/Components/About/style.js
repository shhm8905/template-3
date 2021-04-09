import styled from "styled-components";
import im from "./about-bg.jpg";


export const Creative = styled.div`
  height: 500px;
  background: url(${im});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  @media(max-width:991px){
    height: auto;
  }
`

export const CreativeInfo = styled.div`
  padding-top: 100px;
  width: 50%;
  float: right;
  @media(max-width:991px){
    width: 100%;
    padding-top: 10px;
    float: none;
  }
`

export const InfoTitle = styled.h2`
  font-weight: bold;
  font-size: 50px;
  margin-top:0;
  margin-bottom:20px;
  @media(max-width:768px){
    font-size: 30px;
  }
`

export const Span = styled.span`
  font-weight: normal;
`

export const InfoDir = styled.h4`
  font-size: 40px;
  color: #eb5424;
  margin-bottom: 15px;
  margin-top:15px;
  @media(max-width:768px){
    font-size: 20px;
  }
`

export const InfoDesc = styled.p`
  color: #000;
  margin-bottom: 15px;
  line-height: 1.8;
`

export const A = styled.a`
  text-decoration: none;
`

