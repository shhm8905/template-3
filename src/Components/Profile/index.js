import React from 'react';
import { ProfileItem, ProfileList, ProfileSk, ProfileSkPro, ProfileTitel, Span, SpanWeb, SkillsTitle, Hr, SkillsBar, BarTitle, SkillsPerc, SkillsParent, SkillsSection, ParentSpan,A } from "./style.js";
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
        <ProfileSk id="resume">
            <div className="container">
                <ProfileSkPro>
                    <ProfileTitel><Span>My </Span>Profile</ProfileTitel>
                    <Hr/>
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
                            :  <A href="tel:0736468876" >0736468876</A>
                        </ProfileItem>
                        <ProfileItem>
                            <span>Email</span>
                            : <A href="mailto:hazem-khalil@hotmail.com">hazem-khalil@hotmail.com</A> 
                        </ProfileItem>
                        <ProfileItem>
                            <span>Website</span>
                            <SpanWeb> : <A href=" https://github.com/shhm8905" >https://github.com/shhm8905</A> </SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSkPro>

                <SkillsSection>
                    <SkillsTitle>Some <Span>skills</Span></SkillsTitle>
                    <Hr/>
                    {Pskills}
                </SkillsSection>

            </div>

        </ProfileSk>
    );
}
export default Profile;


