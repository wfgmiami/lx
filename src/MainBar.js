import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: "#000"
  },
  grow: {
    flexGrow: 1,
  },
  logoIcon: {
    width : 55,
    height: 55,
    marginRight: 20,
    marginLeft: -20
  },
});


function MainBar(props) {
  const { classes } = props;
  console.log('props ', props)
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
            <img className={classes.logoIcon} src="LA_logo.png" alt="logo"/>
      
          <Typography variant="h6" color="inherit" className={classes.grow}>
            LEAPx
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

MainBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainBar);