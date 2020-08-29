import React from 'react';
import {useStyles} from "../../assets/useStyles";
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

function Posts({cards}) {

    const classes = useStyles()

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>

                {cards.map(card => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h5" gutterBottom>
                                    Blog Post
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. At aut et minima perferendis perspiciatis vitae!
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    View
                                </Button>
                                <Button size="small" color="primary">
                                    Edit
                                </Button>
                                <LayerIcon />
                                <PlayCircleFilledIcon />
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Posts;
