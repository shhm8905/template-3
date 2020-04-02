import React, { Component } from 'react';
import { WorkSection, WorkTitle, Span, WorkPart, Icon, PartTitle, PartLine, PartDesc } from "./style.js";
import axios from 'axios';

class Work extends Component {
    componentDidMount() {
        axios.get('../../../data.json').then(res => { this.setState({ works: res.data.works }) })
    }
    state = {
        works: []
    }
    render() {
        const { works } = this.state;

        const workslist = works.map((workItem) => {
            return (
                <WorkPart first={workItem.id} key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <PartLine />
                    <PartDesc>
                        {workItem.body}
                    </PartDesc>
                </WorkPart>
            )
        });
        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    {workslist}
                </div>
            </WorkSection>
        );
    }
}

export default Work; 