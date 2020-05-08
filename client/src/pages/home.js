import React, { useState } from 'react'
import axios from 'axios';
import { Container, Box } from '@material-ui/core'
import Keshavaa from '../assets/images/me.JPG'
import styled from 'styled-components';

const Home = () => {

    return(
        <Wrapper>
            <CenterText>
                <Text>Hey <br/> Check my stuff out</Text>
            </CenterText>
            <Box display="flex" flexDirection="column" justifyContent="center">
            <Avatar src={Keshavaa} />
            </Box>
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`

const CenterText = styled.div`
    text-align: center;
`

const Text = styled.p`
    font-family: 'Inconsolata';
    font-size: 50px;
`

const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

