import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Education from '../sections/education'
import Experience from '../sections/experience'
import Achievements from '../sections/achievements'

const Resume = () => {
    return (
        <Wrapper>
            <Layout />
            <ResumeWrapper>
                <Education />
                <Experience />
                <Achievements />
            </ResumeWrapper>
        </Wrapper>
    )
}

export default Resume

const Wrapper = styled.div`
    min-height: 100vh;
`

const ResumeWrapper = styled.div`
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    justify-content: space-around;
`

