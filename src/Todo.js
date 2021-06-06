import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

function Todo(props) {
    return (
        <div className="input">
            <List>
                <ListItem>
                    <ListItemAvatar>

                    </ListItemAvatar>
                    <ListItemText primary={props.text} secondary="Deadline" />
                </ListItem>
            </List>
        </div>
    )
}

export default Todo
