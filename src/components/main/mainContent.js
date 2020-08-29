import React from 'react';
import {Button, Container, Grid, Typography} from "@material-ui/core";

import {useStyles} from "../../assets/useStyles";
import Posts from "./posts";

function MainContent({cards}) {
    const classes = useStyles()

    return (
        <div className={classes.mainContent}>
            <Container maxWidth="md">
                <Typography
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom> React vs Material UI </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet
                    assumenda autem dolorem error, esse inventore iste, labore molestiae nostrum
                    officiis qui, voluptas. Aliquid delectus dicta laudantium magni sit vel?
                </Typography>
                <div className={classes.mainButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">Start Now</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">Learn More</Button>
                        </Grid>
                    </Grid>
                </div>

                <Posts cards={cards} />
            </Container>
        </div>
    );
}

export default MainContent;
