import React from 'react'
import styled from 'styled-components'
import { Card, Divider } from '@material-ui/core'
import ResumeHeading from '../components/resumeHeading'
import Spacer from '../components/spacer'
import achievementInfo from '../assets/data/achievements.json'
import Achievement from '../assets/images/Achievement.png'

const Achievements = () => {
    return (
        <Card>
            <Inside>
                <ResumeHeading heading="Achievements"/>
                <Divider />
                <Spacer space="20px"/>
                {achievementInfo.achievements.map((achievement) => {
                    return(
                        <div>
                            <Spacer space="15px"/>
                            <Heading size="20px">{achievement}</Heading>
                        </div>
                    )
                })}
                <ImageWrapper>
                    <Image src={Achievement}/>
                </ImageWrapper>
            </Inside>
        </Card>
    )
}

export default Achievements

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

const ImageWrapper = styled.div`
    display: flex;
    padding-top: 20px;
    justify-content: center;
`

