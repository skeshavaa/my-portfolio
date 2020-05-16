import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, Divider } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import Layout from '../components/layout'
import Heading from '../components/heading'
import Frontend from '../assets/images/Frontend.png'
import Backend from '../assets/images/Backend.png'
import Tools from '../assets/images/Tools.png'
import Languages from '../assets/images/Languages.png'

const Skills = () => {

    const Titles = ["Frontend", "Backend", "Tools", "Languages"]
    const Skills = [
        ["React JS", "Gatsby JS", "Vue", "Material-UI", "Flutter"],
        ["MongoDB", "Firebase", "Express JS", "Node JS", "Heroku"],
        ["Contentful CMS", "Netlify CMS", "Algolia", "MailChimp", "MailSpree"],
        ["Python", "JavaScript", "Java", "C, C++", "Graphql"]
    ]
    const Pictures = [Frontend, Backend, Tools, Languages]

    var SkillsList = [];

    for (var i = 0; i < Titles.length; i++) {
        SkillsList.push(
            <CardWrapper>
                <Card raised={true}>
                    <Column>
                        <Title>{Titles[i]}</Title>
                        <Divider />
                        {Skills[i].map((skill) => {
                            return (
                                <Listing>{skill}</Listing>
                            )
                        })}
                        {Pictures[i] ? <Image src={Pictures[i]} /> : <Skeleton variant="rect" height={200} width={300}/>}
                    </Column>
                </Card>
            </CardWrapper>
        )
    }

    return (
        <Wrapper id="skills"  className="hide-overflow">
            <Heading title="Skills" />
            <Container>
                {SkillsList}
            </Container>
        </Wrapper>
    )
}

export default Skills

const Wrapper = styled.div`
    padding-top: 20px;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`

const CardWrapper = styled.div`
    margin: 20px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 200px;
    max-width: 500px;
    min-height: 400px;
`

const Title = styled.div`
    font-family: "Abel";
    font-size: 35px;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
`

const Listing = styled.div`
    font-family: "Raleway";
    font-size: 20px;
    padding: 20px 0 10px 15px;
`

const Image = styled.img`
    min-width: 200px;
    max-width: 300px;
    width: 100%;
    max-height: 200px;
    box-fit: cover;
`
