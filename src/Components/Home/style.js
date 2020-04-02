import styled from "styled-components";

export const Hom = styled.div`
    height: 500px;
    background: url('../../../images/home/home-bg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    @media(max-width: 400px){
        height: 365px;
    }
`

export const HomeInformation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
    @media(max-width:400px){
        width: 80%;
    }
`

export const HomeTitle = styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
    @media(max-width: 1024px){
        font-size : 50px;
    }
    @media(max-width: 768px){
        font-size : 30px;
        color : #fff;
    }
    @media(max-width:400px){
        font-size : 25px ;
    }
`

export const HomInfo = styled.h4`
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
    @media(max-width:768px){
        font-size: 18px;
    }
`

export const HomeDesc = styled.p`
    font-size:20px;
    line-height:1.5;
    color:#888;
    margin-bottom: 20px;
    @media(max-width:768px){
        font-size:15px;
    }
`

export const Span = styled.span`
    color: #000;
`

export const HomeBtn = styled.button`
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    &:hover{
        background: #fff;
        color: #eb5424
    }
    @media(max-width:768px){
        width: 130px;
    font-size: 16px;
    padding: 15px;
    }
    @media(max-width:400px){
        width: 110px;
        font-size: 15px;
        padding: 10px;
    }
`
