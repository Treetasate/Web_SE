import React from 'react';

// custom component
import MembersList from './MembersList';
import CreateMembersEntry from './CreateMembersEntry';
import EditMembersEntry from './EditMembersEntry';

// contexts
import { useMembersContext } from '../contexts/MembersContext';

const Interface = () => {
    const { nav_value } = useMembersContext();
    
    switch (nav_value) {
        case "MembersList":
            return <MembersList/>
        case "AddMembers":
            return <CreateMembersEntry/>
        case "EditMembersEntry":
            return <EditMembersEntry/>
        default:
            return <MembersList/>
    };
};

export default Interface;