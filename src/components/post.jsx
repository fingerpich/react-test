import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    card: {
        maxWidth: 300,
        margin: theme.spacing.unit
    },
    media: {
        height: 140,
    },
});

const PostCard = ({classes, title, body}) => {
    return <Card className={classes.card}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
            <Typography component="p">{body}</Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
        </CardActions>
    </Card>
};

export default withStyles(styles)(PostCard);