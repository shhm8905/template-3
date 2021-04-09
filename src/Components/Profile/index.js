import React from 'react';
import { ProfileItem, ProfileList, ProfileSk, ProfileSkPro, ProfileTitel, Span, SpanWeb, SkillsTitle, SkillsDesc, SkillsBar, BarTitle, SkillsPerc, SkillsParent, SkillsSection, ParentSpan } from "./style.js";
import{skills} from './skills';

const Profile = () => {

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
                            <span>Address</span>
                            :  Poesigatan 17 E 70371 Örebro
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
                            <SpanWeb> : https://github.com/shhm8905</SpanWeb>
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


