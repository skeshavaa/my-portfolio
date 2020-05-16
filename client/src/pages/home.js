import React from 'react'
import { Divider, Button } from '@material-ui/core'
import  Layout  from '../components/layout.js'
import DocResume from '../assets/documents/Resume.pdf'
import Keshavaa from '../assets/images/me.png'
import styled from 'styled-components';
import Spacer from '../components/spacer.js'

const Home = () => {

    return (
        <div id="home" className="hide-overflow">
            <Wrapper>
                <Row>
                    <Text padding="10px">Hi, I'm Keshavaa</Text>
                </Row>
                <Row>
                    <Avatar src={Keshavaa} />
                </Row>
                <Spacer space="30px" />
                <Divider variant="middle" />
                <Row>
                    <About padding="30px">
                        I'm in 2nd year at the <Span>University of Toronto</Span><br/>
                        I'm passionate about <Span>front and back end development</Span> and <Span>machine learning</Span><br/>
                        Take a look around! Feel free to reach out and check out my Resume!
                    </About>
                </Row>
                <Row>
                <Button variant="outlined" href={DocResume} target="_blank">
                    <ButtonText>Download My Resume</ButtonText>
                </Button>
                </Row>
            </Wrapper>
            <Spacer space="20px"/>
        </div>
    )
}

export default Home

const Wrapper = styled.div`
    min-height: 100vh;
`

const Row = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const Text = styled.p`
    font-family: 'Abel';
    font-size: 50px;
    text-align: center;
    padding: ${props => props.padding}
`

const About = styled.p`
    font-family: 'Abel';
    font-size: 20px;
    text-align: center;
    padding: ${props => props.padding}
`

const Avatar = styled.img`
    max-height: 250px;
    max-width: 250px;
    border-radius: 50%;
`


const Span = styled.span`
    color: black;
    font-weight: bolder;
`

const ButtonText = styled.h1`
    font-family: 'Abel';
    font-size: 20px;
    padding: 15px;
`

