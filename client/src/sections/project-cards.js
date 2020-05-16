import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../components/project-card'

const ProjectCards = (props) => {

    var Cards = [];

    for (var i = 0; i < props.projects.data.length; i++){
        Cards.push(<ProjectCard project={props.projects.data[i]}/>);
    }

    return (
        <OuterWrapper>
            <Wrapper>
                {Cards}
            </Wrapper>
        </OuterWrapper>
    )
}

export default ProjectCards

const OuterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 90vw;
`
