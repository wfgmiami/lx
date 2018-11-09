import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { List, ListItem, ListItemText, Icon } from "@material-ui/core";
import { navigationConfig } from 'navigationConfig';

const styles = theme => ({
  root: {
    fontSize: "2vw",
    backgroundColor: theme.palette.primary.dark,
    // padding: "10px",
    // minHeight: "75px",
    display: 'flex',
    fontFamily: 'sans-serif',
    color: 'white'
  },
  // phone: {
  //   marginTop: '10px',
  //   marginLeft: '30px',
  //   fontSize: '2.2vw'
  // },
  listItem: {
    textAlign: "left",
    margin: "5px auto",
    maxHeight: '50px'
  },

});

class MenuBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
    this.classToggle.bind(this)
  }


  componentDidMount(prevProps){
    // this._isMounted = true;
      document.querySelector('.Navbar__Link-toggle')
        .addEventListener('click', this.classToggle);
  }



  classToggle = () => {
    const navs = document.querySelectorAll('.Navbar__Items')
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }

  render(){
    const { classes } = this.props;
    console.log('Menu bar props ', this.props)

    return (
      <div className='Navbar'>
  
        <div style={{maxHeight:'70px'}} className="Navbar__Link Navbar__Link-brand">
          <img  style={{ maxWidth: '100%'}} src="LA_logo.png" alt="logo"/>
        </div>

            <div className="Navbar__Link Navbar__Link-toggle">
          <i className="fas fa-bars"></i>
        </div>

        <nav className="Navbar__Items">
          <div className="Navbar__Link">
            <h4 className='phone' >
            LEAPx
            </h4>
          </div>
        </nav>
     
        <nav className="Navbar__Items Navbar__Items--right">

          {navigationConfig.map(item => (
          <React.Fragment key={item.id}>

            <ListItem
              button
              component={NavLink}
              to={item.url}
              className={classes.listItem}
              onClick={this.navbarClick}
            >
              <Icon className="text-white">{item.icon}</Icon>
              <ListItemText
                primary={item.title}
                classes={{ primary: "text-white" }}
              />
            </ListItem>

          </React.Fragment>
          ))}
        </nav>
      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);