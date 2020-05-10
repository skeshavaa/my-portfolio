import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton, Drawer } from '@material-ui/core'
import DrawerContent from './drawerContent'

const Layout = () => {
    const [Handler, setHandler] = useState(false)

    const handler = (e) => {
        e.preventDefault();
        setHandler(!Handler);
    };

    return (
        <div>
            <IconButton size="medium" onClick={handler}>
                <MenuIcon />
            </IconButton>
            <Drawer open={Handler} onClose={handler}>
                <DrawerContent />
            </Drawer>
        </div>
    )
}

export default Layout
