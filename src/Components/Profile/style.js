import styled from "styled-components";


export const ProfileSk = styled.div`
  padding: 50px 0;
  overflow: hidden;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(7,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23b3b3b3'/%3E%3Cstop offset='1' stop-color='%23bababa'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='58' height='58' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='29' cy='29' r='29'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.12'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`

export const ProfileSkPro = styled.div`
  width: 50%;
  float: left;
  @media(max-width:768px){
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
  font-size: 20px;
  line-height: 1.5;
  @media(max-width:768px){
    padding-left:78px;
    font-size:17px;
  }
  @media(max-width:450px){
    padding-left:41px;
  }
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
`

export const SkillsSection = styled.div`
  width: 50%;
  float: left;
  @media(max-width:768px){
    width: 100%;
    float: none;
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
  @media(max-width:768px){
    top:0;
  }
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
  margin: 0;
  @media(max-width:768px){
    font-size: 30px;
    text-align:center;
  }
`

export const SkillsTitle = styled.h2`
  font-size: 40px;
  margin: 0;
  @media(max-width:768px){
    font-size: 30px;
    text-align:center;
  }
`
export const Hr = styled.hr`
  display: block;
  margin:0;
  height: 7px;
  background-color: #eb5424;
  width: 205px;
  border: none;
  margin-bottom: 40px;
  @media screen and (max-width:768px){
    width: 200px;
    margin:auto;
    margin-bottom: 25px;
  }
`
export const A = styled.a`
    text-decoration:none;
    color:#eb5424;
`

