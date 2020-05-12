import React from 'react'
import { Fab } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp';
import Resume from '../assets/documents/Resume.pdf'

const Download = () => {
    return (
        <div>
            <Fab className="download-icon" download href={Resume}>
                <GetAppIcon />
            </Fab>
        </div>
    )
}

export default Download
