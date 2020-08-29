import React from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {useStyles} from '../../assets/useStyles'
import Login from "./login";
import SignIn from "./signIn";

function Header() {

    const classes = useStyles()

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const [signOpen, setSignOpen] = React.useState(false)

    const handleSignOpen = () => {
        setSignOpen(true)
    }

    const handleSignClose = () => {
        setSignOpen(false)
    }

    return (
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start" className={classes.button}
                                color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Typography className={classes.title} variant="h6">React & Material UI</Typography>
                    <Box mr={3}>
                        <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log In</Button>
                        <Login open={open} handleClose={handleClose} />
                    </Box>

                    <Box>
                        <Button color="secondary" variant="contained" open={signOpen} onClick={handleSignOpen}>Sign In</Button>

                        <SignIn signOpen={signOpen} handleSignClose={handleSignClose} />
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
