import React, { useState } from 'react'
import axios from 'axios';
import { Divider, IconButton } from '@material-ui/core'
import  Layout  from '../components/layout.js'

import Keshavaa from '../assets/images/me.jpg'
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
                    <Text padding="30px">Look at my stuff</Text>
                </Row>
            </Wrapper>
        </div>
    )
}

export default Home

const Wrapper = styled.div`

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

const Avatar = styled.img`
    max-height: 250px;
    max-width: 250px;
    border-radius: 50%;
`

const Spacer = styled.div`
    padding: ${props => props.space}
`

