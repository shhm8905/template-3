import React from 'react';
import { SocMedia, Social, Icon, Info, Span, SocialDesc } from "./style.js";

const SocialMedia = () => {

    return (
        <SocMedia>
            <Social href="https://www.facebook.com/hazem.khalil.355">
                <Icon className="icon fa fa-facebook fa-lg"></Icon>
                <SocialDesc>
                    <Span>Follow Me on</Span>
                    <Info>Social Facebook</Info>
                </SocialDesc>
            </Social>
        </SocMedia>
    );
}
export default SocialMedia;