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
                <ImageWrapper>
                    <Image src={EducationPicture} />
                </ImageWrapper>
            </Inside>
        </Card>
    )
}

export default Education

const Inside = styled.div`
    min-width: 200px;
    max-width: 500px;
    padding: 20px;
`

const Heading = styled.h1`
    font-family: 'Inconsolata';
    font-size: ${props => props.size}
`

const Image = styled.img`
    min-width: 200px;
    max-width: 300px;
    width: 100%;
    max-height: 200px;
    box-fit: cover;
`

const ImageWrapper = styled.div`
    display: flex;
    padding-top: 20px;
    justify-content: center;
    box-fit: cover;
`

