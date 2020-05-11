import React from 'react'
import styled from 'styled-components'
import { Card, Button } from '@material-ui/core'

const ProjectCard = (props) => {
    
    return (
        <Card>
            <ProjectWrapper>
                <ImageWrapper>
                    <Image src={props.project.image[0]}/>
                </ImageWrapper>
                <Title>{props.project.name}</Title>
                <Description>{props.project.description}</Description>
                <TagsContainer>
                    {props.project.tags.map((tag) => {
                        return(
                            <Tag>{tag}</Tag>
                        )
                    })}
                </TagsContainer>
                <ButtonContainer>
                    <Button href={props.project.code} target="_blank" variant="outlined">Code</Button>
                    <Button href={props.project.project}  target="_blank" variant="outlined">Project</Button>
                </ButtonContainer>
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
    justify-content: flex-start;
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

const Description = styled.p`
    font-family: 'Abel';
    font-size: 15px;
    padding-left: 25px;
    padding-top: 5px;
    line-height: 25px;
`

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 20px;
    
`

const Tag = styled.a`
    padding: 7px;
    margin: 5px 10px 5px 5px;
    background: #C0E4FC;
    border-radius: 5px;
    font-family: "Inconsolata";
`

const ButtonContainer = styled.div`
    margin-left: 25px;
    margin-right: 25px;
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: 25px;
`