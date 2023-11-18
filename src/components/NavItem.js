import React from 'react';
import {useNavigate} from "react-router-dom";

const NavItem = ({item}) => {
    const navigate = useNavigate()
    return (
        <li onClick={() => navigate(item.route)} className={"nav-item btn btn-warning mx-1"}>{item.title}</li>
    );
};

export default NavItem;