


import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import './header.css'




interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
    currentPage: string;
    setCurrentPage: (arg0: string) => void;

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


export default function Header({darkMode, handleThemeChange, currentPage} : Props){

    return(
        <AppBar position= 'static' sx={{mb:4}}>
            <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography variant='h6'>
                        <Link to="/">Re-Store</Link>
                        </Typography>
                    <Switch checked = {darkMode} onChange={handleThemeChange}/>
                </Box>
                <List>
                    {midLinks.map(({tittle, path}) => (
                        
                        <ListItem key={tittle} className={currentPage == tittle.toString() ? 'active' : 'not-active'}>
                            <NavLink to={path}>
                            {tittle.toUpperCase()}
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
                <Box display='flex' alignItems='center'>
                    <IconButton size="large" sx={{color:'inherit'}}>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCart/>
                    </Badge>
                    </IconButton>
                    <List>
                        {rightLinks.map(({tittle, path}) => (
                            <ListItem key={tittle}>
                                <NavLink to={path}>
                                {tittle.toUpperCase()}
                                </NavLink>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}