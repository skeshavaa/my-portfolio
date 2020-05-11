import React from 'react'
import { List, ListItemText, ListItem } from '@material-ui/core'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Item from '../components/item'
import Logo from '../assets/images/Logo.png'

const DrawerContent = () => {
    return (
        <Wrapper>
            <Image src={Logo} />
            <List>
                <Item text="Home" route="/"></Item>
                <Item text="Skills" route="/skills"></Item>
                <Item text="Projects" route="/projects"></Item>
                <Item text="Resume" route="/resume"></Item>
                <Item text="Contact Me" route="/about"></Item>
            </List>
        </Wrapper>
    )
}

export default DrawerContent

const Wrapper = styled.div`
    width: 300px;
`

const Image = styled.img`
    width: 300px;
    height: 300px;
`
