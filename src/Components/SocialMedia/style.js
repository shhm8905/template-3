import styled from "styled-components";


export const SocMedia = styled.div`
  height: auto;
  overflow: hidden;
`

export const Social = styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  background:${props => props.item === 1 ? '#3b5998' : ''};
  background:${props => props.item === 2 ? '#498cbf' : ''};
  background:${props => props.item === 3 ? '#cc2127' : ''};
  @media(max-width:768px){
    width: 100%;
    float: none;
  }
`

export const Icon = styled.i`
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  color: #888;
  float: left;
  margin-right: 10px;
  margin-top:27px;
  @media(max-width:768px){
    width:  40px;
    height: 40px;
    line-height: 40px;
    margin-top: 21px;
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
`

export const Info = styled.span`
  font-weight: normal;
`

