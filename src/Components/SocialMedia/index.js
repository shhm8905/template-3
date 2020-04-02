import React from 'react';
import { SocMedia, Social, Icon, Info, Span, SocialDesc } from "./style.js";
import { useState, useEffect } from 'react';
import axios from 'axios';

const SocialMedia = () => {

    const [socials, setsocial] = useState([])

    useEffect(() => {
        axios.get('../../../data.json').then(res => { setsocial(res.data.social) })
    }, [])

    const Soc = socials.map((item) => {
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