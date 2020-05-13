import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton, Drawer } from '@material-ui/core'
import DrawerContent from './drawerContent'
import styled from 'styled-components'

const Layout = () => {
    const [Handler, setHandler] = useState(false)

    const handler = (e) => {
        e.preventDefault();
        setHandler(!Handler);
    };

    return (
        <Sticky>
            <Wrapper>
                <IconButton size="medium" onClick={handler}>
                    <MenuIcon />
                </IconButton>
            </Wrapper>
            <Drawer open={Handler} onClose={handler}>
                <DrawerContent />
            </Drawer>
        </Sticky>
    )
}

export default Layout

const Wrapper = styled.div`
    padding-left: 25px;
    padding-top: 25px;
    @media (max-width: 500px){
        padding-left: 5px;
        padding-top: 5px;
    }
`

const Sticky = styled.div`
    position: sticky;
    top: 0px;
`