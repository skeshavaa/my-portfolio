import React from 'react'
import styled from 'styled-components'
import { Card, Divider } from '@material-ui/core'
import ResumeHeading from '../components/resumeHeading'
import Spacer from '../components/spacer'
import EducationPicture from '../assets/images/Education.png'

const Education = () => {
    return (
        <Card>
            <Inside>
                <ResumeHeading heading="Education"/>
                <Divider />
                <Spacer space="20px"/>
                <Heading size="25px">University of Toronto</Heading>
                <Spacer space="10px"/>
                <Heading size="20px">Computer Science, Software Engineering Specialist</Heading>
                <Spacer space="10px"/>
                <Heading size="20px">GPA: 3.6</Heading>
                <Image src={EducationPicture} />
            </Inside>
        </Card>
    )
}

export default Education

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
