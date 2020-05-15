import React, { useState } from 'react'
import axios from 'axios';
import { Divider, IconButton } from '@material-ui/core'
import  Layout  from '../components/layout.js'

import Keshavaa from '../assets/images/me.png'
import styled from 'styled-components';

const Home = () => {

    return (
        <div>
            <Layout />
            <Wrapper>
                <Row>
                    <Text padding="30px">Hi, I'm Keshavaa</Text>
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
            </Wrapper>
        </div>
    )
}

export default Home

const Wrapper = styled.div`
    height: 110vh;
`

const Row = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
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

const Spacer = styled.div`
    padding: ${props => props.space}
`

const Span = styled.span`
    color: black;
    font-weight: bolder;
`


