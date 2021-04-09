import React from 'react';
import { SocMedia, Social, Icon, Info, Span, SocialDesc } from "./style.js";
import {soc} from './soc.js';

const SocialMedia = () => {

    const Soc = soc.map((item) => {
        return (
            <Social key={item.id} item={item.id}>
                <Icon className={item.icon}></Icon>
                <SocialDesc>
                    <Span>{item.title}</Span>
                    <Info>{item.body}</Info>
                </SocialDesc>
            </Social>
        )
    })



    return (
        <SocMedia>

            {Soc}


        </SocMedia>
    );
}
export default SocialMedia;