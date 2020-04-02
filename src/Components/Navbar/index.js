import React from 'react';

import { NavbarSection, Logo, LogoText, UlList, ListItem, StyledNavLink, Input, Label } from './style.js';

const Navbar = () => {
    return (
        <NavbarSection>

            <div className="container">

                <Logo>
                    <LogoText>Hazem Profile</LogoText>
                </Logo>

                < Input type="checkbox" id=" nav " />
                < Label htmlFor=" nav " > </ Label >


                <UlList>
                    <ListItem><StyledNavLink to="/">Home</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink to="/#">Work</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink to="/#">Portfolio</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink to="/#">Resume</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink to="/#">About</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink to="/Contact">Contact</StyledNavLink></ListItem>
                </UlList>

            </div>

        </NavbarSection>

    );
}
export default Navbar;