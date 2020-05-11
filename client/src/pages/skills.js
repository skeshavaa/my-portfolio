import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, Divider } from '@material-ui/core'
import Layout from '../components/layout';
import Heading from '../components/heading'

const Skills = () => {

    const Titles = ["Frontend", "Backend", "Tools", "Languages"]
    const Skills = [
        ["React JS", "Gatsby JS", "Vue", "Material-UI", "Flutter"],
        ["MongoDB", "Firebase", "Express JS", "Node JS", "Heroku"],
        ["Contentful CMS", "Netlify CMS", "Algolia", "MailChimp", "MailSpree"],
        ["Python", "JavaScript", "Java", "C, C++", "Graphql"]
    ]

    var SkillsList = [];

    for (var i =0; i < Titles.length; i++){
        SkillsList.push(
            <CardWrapper>
                <Card raised={true}>
                <Column>
                    <Title>{Titles[i]}</Title>
                    <Divider />
                    {Skills[i].map((skill) => {
                        return(
                            <Listing>{skill}</Listing>
                        )
                    })}
                </Column>
            </Card>
            </CardWrapper>
        )
    }

    return(
        <div>
            <Layout />
            <Heading title="Skills" />
            <Container>
                {SkillsList}
            </Container>
        </div>
    )
}

export default Skills

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 30px 10vw 0 10vw;
`

const CardWrapper = styled.div`
    margin-bottom: 20px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
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
