import styled from "styled-components";
import im from './home.jpg';

export const Hom = styled.div`
    height: 600px;
    background: url(${im});
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    background-attachment: fixed;
    @media screen and (max-width:768px){
        height:440px
    }

    
`

export const HomeInformation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    @media screen and (max-width:768px){
        width: 100%;
    }
`

export const HomeTitle = styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
    @media screen and (max-width: 1024px){
        font-size : 50px;
    }
    @media screen and (max-width: 768px){
        font-size : 30px;
        color : #fff;
    }
    @media screen and (max-width:400px){
        font-size : 25px ;
    }
`

export const HomInfo = styled.b`
    display:block;
    font-size: 30px;
    color: #eb5424;
    margin:0;
    margin-bottom: 20px;
    @media(max-width:768px){
        font-size: 18px;
    }
`

export const HomeDesc = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #5e5e5e;
    background-color: #0000000f;
    margin-bottom: 40px;
    border-radius: 20%;
    padding: 30px 20px 30px 20px;
    @media screen and (max-width:768px){
        font-size:15px;
        margin: 0 auto 30px auto;
        padding: 14px;
        width: 88%;
    }
`

export const Span = styled.span`
    color: #eb5424;
`

export const HomeBtn = styled.a`
    display:block;
    margin:auto;
    text-decoration:none;
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 30px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 50%;
    &:hover{
        background: #fff;
        color: #eb5424
    }
    @media screen and (max-width:768px){
        width: 130px;
        font-size: 16px;
        padding: 25px;
    }
   
`
