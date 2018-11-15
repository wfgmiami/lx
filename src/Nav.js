import React, { Component } from "react";
// import classNames from 'classnames'
// import { List, ListItem, ListItemText, Icon } from "@material-ui/core";
import { NavLink, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { navigationConfig } from "navigationConfig";
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
import InfoBar from 'InfoBar';

const styles = theme => ({
  root: {
    fontSize: "2vw",
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    fontFamily: 'sans-serif',
    color: 'white'
  },
  listItem: {
    textAlign: "left",
    margin: "5px auto",
    maxHeight: '50px',
    "&:hover": {
      display:'block' 
    }
  },

});

class Nav extends Component {

  constructor(props){
    super(props)
    this.state = {
      anchorEl: null,
    }
    this.classToggle.bind(this)
  }


  componentDidMount(prevProps){
    document.querySelector('.NavbarLinkToggle')
      .addEventListener('click', this.classToggle);
  }

  classToggle = () => {
    const navs = document.querySelectorAll('.NavbarItems')
    navs.forEach(nav => nav.classList.toggle('NavbarToggleShow'));
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const menuItemsCount = navigationConfig.length;

    // console.log('this state', this.state)
    return (
      <div style={{padding: '0 20px 0 20px'}}>
        <div className='Navbar'>
          <div style={{ padding:'0', margin: '0'}} className="NavbarLink NavbarLinkBrand">
            <img
              style={{ width: '50', height: '50' }}
              src="LA_logo.png"
              alt="la-logo"
            />
          </div>

          <div className="NavbarLink NavbarLinkToggle">
            <i className="fas fa-bars"></i>
          </div>

          <nav className="NavbarItems">
            <div className="NavbarLink">
              <div className="leapLogo">
                LEAPx
              </div>
            </div>
          </nav>

        
      
          <div className="NavbarItems NavbarItemsRight">
            <ul className="NavbarItems nav">
              {navigationConfig.map( (item,idx) => {
          
              if(item.submenu){
                return (
                  <li key={idx} className="drop">{item.title}
                  <span className="sub-arrow"></span>
        
                    <ul className={ menuItemsCount === idx + 1 ? 'lastMenuItem' : null }>
                    { item.submenu.map( (submenu, id) => (
                        <li key={id}><a href="http://www.g.com">{submenu.title}</a></li>
                      ))
                    }
                    </ul>
                  </li>
                )
              }else{
                return  (<li key={idx}><a href="http://www.g.com">{item.title}</a></li>) 
              }
        
              })}
            </ul>
          </div>  


        </div>
        <InfoBar/>
      </div>
    );
  }
}

// export default withStyles(styles, { withTheme: true })(Nav);


export default withStyles(styles)(withRouter(Nav));