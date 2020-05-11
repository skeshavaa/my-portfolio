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
        <div>
            <Wrapper>
                <IconButton size="medium" onClick={handler}>
                    <MenuIcon />
                </IconButton>
            </Wrapper>
            <Drawer open={Handler} onClose={handler}>
                <DrawerContent />
            </Drawer>
        </div>
    )
}

export default Layout

const Wrapper = styled.div`
    padding-left: 25px;
    padding-top: 25px;
`