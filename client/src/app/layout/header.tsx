

import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import './header.css'


interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks =[
    {tittle: 'catalog', path: '/catalog'},
    {tittle: 'about', path: '/about'},
    {tittle: 'contact', path: '/contact'}
]

const rightLinks =[
    {tittle: 'login', path: '/login'},
    {tittle: 'register', path: '/register'}
]


export default function Header({darkMode, handleThemeChange} : Props){

    return(
        <AppBar position= 'static' sx={{mb:4}}>
            <Toolbar>
                <Typography variant='h6'>
                    <Link to="/">Re-Store</Link>
                    </Typography>
                <Switch checked = {darkMode} onChange={handleThemeChange}/>
                <List>
                    {midLinks.map(({tittle, path}) => (
                        <ListItem>
                            <NavLink to={path}>
                            {tittle.toUpperCase()}
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
                <IconButton size="large" sx={{color:'inherit'}}>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCart/>
                </Badge>
                </IconButton>
                <List>
                    {rightLinks.map(({tittle, path}) => (
                        <ListItem>
                            <NavLink to={path}>
                            {tittle.toUpperCase()}
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
            </Toolbar>
        </AppBar>
    )
}