import React from 'react'
import styled from 'styled-components'
import { Card, Divider } from '@material-ui/core'
import ResumeHeading from '../components/resumeHeading'
import Spacer from '../components/spacer'
import EducationPicture from '../assets/images/Education.png'
import information from '../assets/data/resume.json'

const Experience = () => {

    return (
        <Card>
            <Inside>
                <ResumeHeading heading="Experience"/>
                <Divider />
                <Spacer space="20px"/>
                {information.jobs.map((job) => {
                    return(
                        <div>
                            <Heading size="25px">{job.position}</Heading>
                            <Spacer space="5px"/>
                            <RowWrapper>
                                <TitleWrapper>
                                    <Heading size="20px">{job.employer}</Heading>
                                </TitleWrapper>
                                <DateWrapper>
                                    <Heading size="20px">{job.date}</Heading>
                                </DateWrapper>
                                <ul>
                                    {job.details.map((detail) => {
                                        return(
                                            <li>
                                                <Heading size="15px">{detail}</Heading>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </RowWrapper>
                            <Spacer space="20px"/>
                        </div>
                    )
                })}
            </Inside>
        </Card>
    )
}

export default Experience

const Inside = styled.div`
    min-width: 200px;
    max-width: 500px;
    width: 100vw;
    padding: 20px;
`

const Heading = styled.h1`
    font-family: 'Inconsolata';
    font-size: ${props => props.size}
`

const Image = styled.img`
    width: 50%;
    min-width:200px;
`

const Ul = styled.ul`
    list-style-type: disc;
`

const RowWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const TitleWrapper = styled.div`
    width: 250px;
`
const DateWrapper = styled.div`
    width: 250px;
    text-align: right;
    @media (max-width: 499px){
        text-align: left;
    }
`