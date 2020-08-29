import React from 'react';
import {BottomNavigation, BottomNavigationAction, Typography} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Folder";
import {useStyles} from "../../assets/useStyles";

function Footer() {

    const classes = useStyles()

    const [value, setValue] = React.useState("recents")

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <footer>
            <Typography style={{marginTop: "25px"}} variant="h6" align="center" gutterBottom>Footer</Typography>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                className={classes.root}>
                <BottomNavigationAction
                    lable="Recents"
                    value="recents"
                    icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                    lable="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    lable="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon />}
                />
                <BottomNavigationAction
                    lable="Folder"
                    value="folder"
                    icon={<FolderIcon />}
                />
            </BottomNavigation>

            <Typography align="center"  color="textSecondary"  component="p" variant="subtitle1">
                React - Material-UI Site
            </Typography>
        </footer>
    );
}

export default Footer;
