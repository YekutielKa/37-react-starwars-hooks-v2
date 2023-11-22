import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {StarWarsContext} from "../utils/constants";

const NavItem = ({item}) => {
    const navigate = useNavigate()
    const {hero} = useContext(StarWarsContext)
    return (
        <li onClick={() => navigate(`/${item.route}/${hero}`)} className={"nav-item btn btn-warning mx-1"}>{item.title}</li>
    );
};

export default NavItem;