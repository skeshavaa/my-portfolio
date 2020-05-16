import React from 'react'
import { Link } from 'react-router-dom'
import { ListItem, ListItemText } from '@material-ui/core'
import styled from 'styled-components'

const Item = (props) => {
    return (
        <Link to={props.route} className="link">
            <ListItem button>
                <ListItemText><ItemText>{props.text}</ItemText></ListItemText>
            </ListItem>
        </Link>
    )
}

export default Item

const ItemText = styled.p`
    font-family: "Raleway";
    font-size: 20px;
`
