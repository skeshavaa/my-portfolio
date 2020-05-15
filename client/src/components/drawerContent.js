import React from 'react'
import { List, ListItemText, ListItem } from '@material-ui/core'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Item from '../components/item'
import Download from '../components/download'
import Logo from '../assets/images/Logo.png'

const DrawerContent = () => {
    return (
        <Wrapper>
            <ImageWrapper>
            <Image src={Logo} />
            </ImageWrapper>
            <List>
                <Item text="Home" route="/"></Item>
                <Item text="Skills" route="/skills"></Item>
                <Item text="Projects" route="/projects"></Item>
                <Item text="Resume" route="/resume"></Item>
                <Item text="Contact Me" route="/contact"></Item>
            </List>
        </Wrapper>
    )
}

export default DrawerContent

const Wrapper = styled.div`
    width: 300px;
`

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Image = styled.img`
    width: 150px;
    height: 150px;
`