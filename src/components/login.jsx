import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Figerprint from '@material-ui/icons/Fingerprint';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import ErrorIcon from '@material-ui/icons/Error';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    formControl: {
        margin: theme.spacing.unit,
        width: '100%'
    },
    title: {
    },
    card: {
        width: 300,
        margin: 'auto'
    },
    progress: {
    },
    flexCenter: {
        display: 'flex',
        position: 'fixed',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    }
});

export class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: 'Sincere@april.biz',
            },
            submitted: false,
            openSnack: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { user } = this.state;
        const email = event.target.value;
        this.setState({user: {...user, email}});
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        this.props.signIn(user);
    }
    componentWillReceiveProps(nextProps) {
        if (!!nextProps.error) {
            this.setState({openSnack: true, submitted: false});

        }
    }
    handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ openSnack: false });
    };

    render() {
        const {classes} = this.props;
        return <div className={classes.flexCenter}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Login
                    </Typography>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="component-simple">Name</InputLabel>
                            <Input className={'email'} id="component-simple" value={this.state.user.email} onChange={this.handleChange}/>
                        </FormControl>
                    </div>
                </CardContent>
                <CardActions>
                    <Button disabled={this.state.submitted} variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
                        Login
                        {this.state.submitted?
                            <CircularProgress className={classes.progress} />:
                            <Figerprint/>}
                    </Button>

                </CardActions>
            </Card>
            <Snackbar
              open={this.state.openSnack}
              onClose={this.handleCloseSnack.bind(this)}
              ContentProps={{
                  'aria-describedby': 'message-id',
              }}
              autoHideDuration={3000}
              message={<span id="message-id"><ErrorIcon/>{this.props.error}</span>}
            />
        </div>
    }
};

export default withStyles(styles)(LoginForm);