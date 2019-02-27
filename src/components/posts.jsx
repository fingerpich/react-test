import React, {Component} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Post from './post';
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    postList: {
        maxWidth: 1000,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'inherit',
        flexWrap: 'wrap'
    },
    title: {
        textAlign: 'center'
    },
    error: {
        color: 'red'
    }
});

class posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const {classes} = this.props;
        return <div>
            <h3 className={classes.title}>POSTS</h3>
            {this.props.isLoading ?
              <LinearProgress/>:
              this.props.error ?
                <div className={classes.error}>{this.props.error}</div> :
                <div className={classes.postList}>
                    {this.props.posts.map((post) => {
                        return <Post className={classes.post} key={post.id} {...post} />
                    })}
                </div>

            }
        </div>
    }
}

export default withStyles(styles)(posts);