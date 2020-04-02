import React from 'react';
import { ProfileItem, ProfileList, ProfileSk, ProfileSkPro, ProfileTitel, Span, SpanWeb, SkillsTitle, SkillsDesc, SkillsBar, BarTitle, SkillsPerc, SkillsParent, SkillsSection, ParentSpan } from "./style.js";
import { useState, useEffect } from "react";
import axios from 'axios';

const Profile = () => {

    const [skills, setskill] = useState([])

    useEffect(() => {
        axios.get('../../../data.json').then(res => { setskill(res.data.skills) })
    }, [])

    const Pskills = skills.map((skill) => {
        return (
            <SkillsBar key={skill.id}>
                <BarTitle>{skill.title}</BarTitle>
                <SkillsPerc>{skill.perc}</SkillsPerc>
                <SkillsParent>
                    <ParentSpan style={{ width: skill.class }}></ParentSpan>
                </SkillsParent>
            </SkillsBar>
        )
    })



    return (
        <ProfileSk>
            <div className="container">
                <ProfileSkPro>
                    <ProfileTitel><Span>My </Span>Profile</ProfileTitel>
                    <ProfileList>
                        <ProfileItem>
                            <span>Name</span>
                            : Hazem Khaleel
                        </ProfileItem>
                        <ProfileItem>
                            <span>Birthday</span>
                            : 1989/02/05
                        </ProfileItem>
                        <ProfileItem>
                            <span>Address</span>
                            :  Degerfors 69333
                        </ProfileItem>
                        <ProfileItem>
                            <span>Phone</span>
                            :  0736468876
                        </ProfileItem>
                        <ProfileItem>
                            <span>Email</span>
                            :  hazem-khalil@hotmail.com
                        </ProfileItem>
                        <ProfileItem>
                            <span>Website</span>
                            <SpanWeb> : www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSkPro>

                <SkillsSection>
                    <SkillsTitle>Some <Span>skills</Span></SkillsTitle>
                    <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {Pskills}
                </SkillsSection>

            </div>

        </ProfileSk>
    );
}
export default Profile;


