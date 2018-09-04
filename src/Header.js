import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        const navDiv = {
            padding: 0,
            margin: 0,
            position: "absolute",
            top: 0,
            height: "40px",
            width: "100%",
            display: "flex",
            background: "rgb(255, 255, 255)"
        };
        const navItems = {
            margin: "10px"
        }
        return (
            <div style={navDiv}>
                <NavLink style={navItems} to='/'>About</NavLink>
                <NavLink style={navItems} to='/sections'>Sections</NavLink>
            </div>
        )
    }
}