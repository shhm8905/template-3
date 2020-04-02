import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarSection = styled.div`
  padding: 10px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;
`

export const Logo = styled.div`
  
  display: inline-block;
  float: left;
  @media(max-width:712px){
   
    float: none;
  }
`

export const LogoText = styled.h2`
  padding:17px;
  margin:0;
  font-size: 30px;
    font-weight: bold;
    @media(max-width:1024px){
      font-size: 20px;
      padding:24px;
      margin: 0;
    }
    @media(max-width:712px){
      padding: 0 0 0 10px;
    }
    
`

export const ListItem = styled.li`
  display: inline-block;
  @media(max-width:712px){
    display: block;
    text-align: center;
  }
`

export const StyledNavLink = styled(NavLink)`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover{color: #eb5424;} 

`

export const Input = styled.input`
  position: absolute;
  top: 15px;
  right: 35px;
  opacity: 0;
  visibility: hidden;
  @media screen and (max-width:712px){
    
    &:checked ~ Ul{
      display: block;
    }
     &:checked ~ Label{
      background: url('../../../images/navbar/close.png') no-repeat ; 
    background-size: cover;
   }
  } 
`

export const UlList = styled.ul`
  display: inline-block;
  float: left;
  list-style: none;
  padding: 0 0 0 530px;
  @media(max-width:1482px){
    padding: 0 0 0 142px;
  }
  @media(max-width:1024px){
    padding: 0 0 0 60px;
  }
  @media(max-width:870px){
    padding: 0 0 0 35px;
  }
  
  @media(max-width:712px){
    width: 100%;
    float:  none;
    margin-top: 20px;
    padding: 0;
    display: none;
    
  }
`

export const Label = styled.label`
  position: absolute;
  top: 3px;
  right: 25px;
  display: none;
  width: 40px;
  height: 40px;
  background: url('../../../images/navbar/open.png') no-repeat ;
  background-size: cover;
  cursor: pointer;
  @media(max-width:712px){
  display: block;
}
`





