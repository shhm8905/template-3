import styled from "styled-components";

export const WorkSection = styled.div`
  height: auto;
  padding: 50px 0;
  overflow: hidden;
  background: #fff;
  @media(max-width:1024px){
    width:100%;
  }
  @media(max-width:768px){
    padding:0;
  }
  
`

export const WorkTitle = styled.h2`
  font-size: 60px;
  text-align:center;
  @media(max-width:768px){
    font-size:40px;
  }
  @media(max-width:400px){
    font-size:30px;
  }
`

export const Span = styled.span`
  font-weight: normal;
`

export const WorkPart = styled.div`
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #888;
  box-sizing: border-box;
  text-align: center;
 
  margin-left:${props => props.first === 1 ? '0' : '5%'};
  @media(max-width:1024px){
    box-sizing:border-box;
    width:32%;
    margin-left:${props => props.first === 1 ? '0' : '2%'};
  }
  @media(max-width:768px){
    width: 60%;
    margin:20px auto;
    float:none;
    padding:75px 0;
  }
  @media(max-width:400px){
    width: 90%;
    margin:20px auto;
    float: none;
    padding:50px 0;
  }
 
`

export const Icon = styled.i`
  color: #888;
  margin-bottom: 20px;
`

export const PartTitle = styled.h4`
  font - size: 25px;
  color: #eb5424;
  margin - bottom: 20px;
`

export const PartLine = styled.hr`
  width: 60 %;
  margin: auto;
  margin - bottom: 20px;
`

export const PartDesc = styled.p`
  font - size: 14px;
  color: #888;
  padding: 20px;
`
