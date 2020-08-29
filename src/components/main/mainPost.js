import React from 'react';
import {Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import {useStyles} from "../../assets/useStyles";

function MainPost() {
    const classes = useStyles()

    return (
        <Paper className={classes.mainFeaturesPost}
               style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
            <Container fixed>
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                            <Typography
                                component="h1"
                                variant="h3"
                                color="inherit"
                                gutterBottom
                            >
                                React & Material UI
                            </Typography>

                            <Typography
                                variant="h5"
                                color="inherit"
                                paragraph
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ea est
                                laudantium molestias possimus. Animi delectus fuga itaque quos. Ea.
                            </Typography>

                            <Button variant="contained" color="secondary">Learn more</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
}

export default MainPost;
