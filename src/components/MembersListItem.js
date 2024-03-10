import React, { useState } from 'react';

// mui components
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

// mui icons
//import { IconButton, ListItem } from '@mui/material';
import {
    //Edit,
    ExpandMore,
    ExpandLess,
    LabelImportantOutlined,
} from '@mui/icons-material';

// nav
//import { useMembersContext } from '../contexts/MembersContext';
import "./MainSection.css";
export default function MembersListItem({id,MembersFieldData,name}) {
    const [open, setOpen] = useState(true);
   // const {changeNavValue, getMembersId } = useMembersContext();

    const handleClick = () => {
        setOpen(!open);
    };

    //const handleEditButton = () => {
       // getMembersId(id);
       // changeNavValue("EditMembersEntry");
   // };

    return (
        <main className="mainContainer">
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
        >

        {/* <ListItem
            secondaryAction={
                <>
                    <IconButton onClick={handleEditButton} edge="end" aria-label="edit">
                        <Edit sx={{ color: 'green' }}/>
                    </IconButton>
                </>
            }
        > */}
            <ListItemButton disableRipple onClick={handleClick}>
                    <ListItemIcon>
                        <LabelImportantOutlined />
                    </ListItemIcon>
                    <ListItemText
                        primary={name}    
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
        {/* </ListItem> */}
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        MembersFieldData.map((item, i)=>(
                            <ListItemButton key={i} disableRipple sx={{ pl: 9 }}>
                                <ListItemText primary={item.attrib} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Collapse>
        </List>
        </main>
    );
};