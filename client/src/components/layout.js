import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton, Drawer } from '@material-ui/core'

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
                <h2>sdf</h2>
            </Drawer>
        </div>
    )
}

export default Layout
