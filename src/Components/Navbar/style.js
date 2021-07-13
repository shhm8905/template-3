import styled from "styled-components";
import{Link} from "react-scroll";
import close from './images/close1.png';
import open from './images/op.png';

export const NavbarSection = styled.div`
  overflow: hidden;
  background: #33333326;
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

export const LogoText = styled(Link)`
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
      padding:14px;
      margin: 0;
    }
    @media(max-width:768px){
      padding:10px;
    }
    
`

export const ListItem = styled.li`
  display: inline-block;
  @media(max-width:768px){
    display: block;
    text-align: center;
  }
`

export const StyledNavLink = styled(Link)`
  display: block;
  color: #0000008c;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  transition: color 0.5s ease-in-out;
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
  top: 17px;
  right: 33px;
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
  top: 10px;
  right: 25px;
  display: none;
  width: 35px;
  height: 35px;
  background: url(${open}) no-repeat ;
  background-size: cover;
  cursor: pointer;
  @media(max-width:768px){
  display: block;
}
`





