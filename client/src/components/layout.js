import React, { useState } from 'react'
import theme from '../styles/theme'
import MenuIcon from '@material-ui/icons/Menu'
import { Fab, Drawer, MuiThemeProvider } from '@material-ui/core'
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
                <MuiThemeProvider theme={theme}>
                    <Fab size="medium" onClick={handler} className="floating" color="primary">
                        <MenuIcon />
                    </Fab>
                </MuiThemeProvider>
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
    position:-webkit-sticky;
    top: 0;
`