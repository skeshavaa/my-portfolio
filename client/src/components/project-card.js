import React from 'react'
import styled from 'styled-components'
import { Card } from '@material-ui/core'

const ProjectCard = (props) => {
    
    return (
        <Card>
            <ProjectWrapper>
                <ImageWrapper>
                    <Image src={props.project.image[0]}/>
                </ImageWrapper>
                <Title>{props.project.name}</Title>
            </ProjectWrapper>
        </Card>
    )
}

export default ProjectCard

const ProjectWrapper = styled.div`
    min-width: 200px;
    max-width: 400px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
`

const ImageWrapper = styled.div`
    object-fit: fill;   
    min-width: 200px;
    max-width: 600px;
    min-height: 100px;
    max-height: 200px;
`

const Image = styled.img`
    min-width: 200px;
    max-width: 600px;
    min-height: 100px;
    max-height: 300px;
    object-fit: cover;  
    width: 100%;
`

const Title = styled.h1`
    font-family: 'Inconsolata';
    font-size: 20px;
    padding-left: 25px;
    padding-top: 15px;
`
