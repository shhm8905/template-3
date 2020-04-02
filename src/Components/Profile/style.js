import styled from "styled-components";


export const ProfileSk = styled.div`
  padding: 50px 0;
  overflow: hidden;
`

export const ProfileSkPro = styled.div`
  width: 50%;
  float: left;
  @media(max-width:768px){
    text-align:center;
    width: 100%;
    float: none;
    margin-bottom: 50px;
  }
`

export const Span = styled.span`
  font-weight: normal;
`

export const ProfileList = styled.ul`
  list-style: none;
  padding:0;
`

export const ProfileItem = styled.li`
  margin-bottom: 8px;
`

export const ItemSpan = styled.span`
  display: inline-block;
  width: 100px;
  font-weight: bold;
`

export const SpanWeb = styled.span`
  font-weight: normal;
  color: #eb5424;
`

export const SkillsSection = styled.div`
  width: 50%;
  float: left;
  @media(max-width:768px){
    width: 100%;
    float: none;
  }
`

export const SkillsDesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
  @media(max-width:768px){
    width:80%;
    margin:auto;
  }
`

export const SkillsBar = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
  @media(max-width:768px){
    width:80%;
    margin:auto;
  }
`

export const BarTitle = styled.h2`
  float: left;
  margin:0;
  @media(max-width:768px){
    font-size:17px;
  }
`

export const SkillsPerc = styled.span`
  float: right;
  margin-right: 100px;
  margin-top:10px;
`

export const SkillsParent = styled.div`
  height: 2px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px;
`

export const ParentSpan = styled.span`
  background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
`

export const ProfileTitel = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  @media(max-width:768px){
    font-size: 30px;
  }
`

export const SkillsTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  @media(max-width:768px){
    font-size: 30px;
    text-align:center;
  }
`



