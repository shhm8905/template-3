import styled from "styled-components";
import{HashLink} from "react-router-hash-link";
import close from './images/close.png';
import open from './images/open.png';

export const NavbarSection = styled.div`
  padding: 10px 0;
  overflow: hidden;
  background: #333;
  position: relative;
  border-bottom: 1px solid #000;
`

export const Logo = styled.div`
  
  display: inline-block;
  float: left;
  @media(max-width:768px){
   
    float: none;
  }
`

export const LogoText = styled(HashLink)`
  padding:8px;
  margin:0;
  font-size: 30px;
  font-weight: bold;
  color: #eb5424;
  display:block;
  text-decoration:none;
  font-family: 'Pacifico', cursive;
    @media(max-width:1024px){
      font-size: 20px;
      padding:24px;
      margin: 0;
    }
    @media(max-width:768px){
      padding: 0 0 0 10px;
    }
    
`

export const ListItem = styled.li`
  display: inline-block;
  @media(max-width:768px){
    display: block;
    text-align: center;
  }
`

export const StyledNavLink = styled(HashLink)`
  display: block;
  color: #c3c3c3;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover{color: #eb5424;} 

`
export const NavBtn = styled.button`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  background: inherit;
  border: none;
  outline: none;
  font-size:16px;
  &:hover{color: #eb5424;}
  @media screen and (max-width:768px){
    display:inline-block;
    
  }
`

export const Input = styled.input`
  position: absolute;
  top: 15px;
  right: 35px;
  opacity: 0;
  visibility: hidden;
  @media screen and (max-width:768px){
    
    &:checked ~ Ul{
      display: block;
    }
    &:checked ~ Label{
      background: url(${close}) no-repeat ; 
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
  
  @media(max-width:768px){
    width: 100%;
    float:  none;
    margin-top: 20px;
    padding: 0;
    display: none;
    
  }
`

export const Label = styled.label`
  position: absolute;
  top: 7px;
  right: 25px;
  display: none;
  width: 40px;
  height: 40px;
  background: url(${open}) no-repeat ;
  background-size: cover;
  cursor: pointer;
  @media(max-width:768px){
  display: block;
}
`





