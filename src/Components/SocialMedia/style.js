import styled from "styled-components";


export const SocMedia = styled.div`
  height: 110px;
  width:100%;
  background:#3b5998;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width:712px){
    height:70px;
  }
`

export const Social = styled.a`
  text-decoration:none;
`

export const Icon = styled.i`
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  color: #3b5998;
  float: left;
  border-radius: 50%;
  margin-right: 10px;
  margin-top:23px;
  font-size: 32px;
  @media(max-width:768px){
    width:  40px;
    height: 40px;
    line-height: 40px;
    margin-top: 15px;
    font-size:24px;
  }
`

export const SocialDesc = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
  float:left;
  @media(max-width:768px){
    font-size: 15px;
  }
`

export const Span = styled.span`
  display: block;
  margin-bottom: 8px;
  @media(max-width:768px){
    margin-bottom: 3px;
  }
`

export const Info = styled.span`
  font-weight: normal;
`

