import React,{useState} from 'react';
import { NavbarSection, Logo, LogoText, UlList, ListItem, StyledNavLink, Input, Label } from './style.js';

const Navbar = () => {
    const[checked,setChecked]=useState(false);

    const handleChange =(e)=>{
        const checked=e.target.checked;
        setChecked(checked);
    }
    
    
    return (
        <NavbarSection id="navbar" >
            <div className="container">
                <Logo>
                    <LogoText smooth={true} duration={2000} to="navbar" >My Profile</LogoText>
                </Logo>

                < Input type="checkbox" checked={checked} onChange={handleChange} id=" nav " />
                < Label htmlFor=" nav " > </ Label >

                <UlList>
                    <ListItem><StyledNavLink smooth={true} duration={2000} to="work">Work</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink smooth={true} duration={2000} to="portfolio">Portfolio</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink smooth={true} duration={2000} to="resume">Resume</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink smooth={true} duration={2000} to="about">About</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink smooth={true} duration={2000} to="contact">Contact</StyledNavLink></ListItem>
                </UlList>
            </div>    
        </NavbarSection>

    );
}
export default Navbar;