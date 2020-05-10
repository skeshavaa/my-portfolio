import React from 'react'
import { Link } from 'react-router-dom'
import { ListItem, ListItemText } from '@material-ui/core'

const Item = (props) => {
    return (
        <Link to={props.route} className="link">
            <ListItem button>
                <ListItemText>{props.text}</ListItemText>
            </ListItem>
        </Link>
    )
}

export default Item
