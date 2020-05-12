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
            <Image src={Logo} />
            <List>
                <Item text="Home" route="/"></Item>
                <Item text="Skills" route="/skills"></Item>
                <Item text="Projects" route="/projects"></Item>
                <Item text="Contact Me" route="/contact"></Item>
            </List>
            <ResumeWrapper>
                <Download />
                <ItemText>Resume</ItemText> 
            </ResumeWrapper>
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

const ResumeWrapper = styled.div`
    display: flex;
    padding-left: 15px;
    align-items: center;
`


const ItemText = styled.p`
    font-family: "Raleway";
    font-size: 20px;
    padding-left: 20px;
`
