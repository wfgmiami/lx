import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Icon from '@material-ui/core/Icon';
import { List, ListItem, ListItemText } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: '100%',
 
  },
  heading: {
    fontSize: theme.typography.pxToRem(14),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(12),
    // color: theme.palette.text.secondary,
  },
  firstSection: {
    display: 'flex'
  },
  stockLookup: {
    flexBasis: '40%',
  
  },
  columnPortfolioInfo: {
    flexBasis: '60%',

  },
  columnPortfolioInputs: {
    flexBasis: '50%',

  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `0 ${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: 55,
    // height: 30,
  },

  textFieldLookup: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    height: '40px',
    width: '80px'
  },
  textFieldDate: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // width: 150,
  },
  textFieldPortfolio: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // width: 200,
  },
  textFieldSleeve: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // width: 100,
  },
  select: {
    fontSize: '14px',
  },
  input: {
    fontSize: '14px',
  },
  inputTicker: {
    width: '70px'
  },
  checkbox_label: {
    fontSize: '14px',
    marginBottom: '10px'
  },
  textFieldLabel: {
    marginBottom: '20px'
  },
  checkbox: {
    marginBottom: '10px'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  button: {
    marginLeft: theme.spacing.unit,
  },
  listItem: {
    textAlign: "left",
    margin: "2px auto",
    maxHeight: '30px',
  },
});

class InfoBar extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      checkedA: true,
      checkedB: true,
      checkedC: true,
      bmrkWght: '',
      portfolios: [
        { value:'AFFIL', label: "Affiliated Fund" },
        { value:'DEV', label: "Developing Growth" },
        { value:'GL', label: "Growth Leaders Fund" },
        { value:'MCSF', label: "Mid Cap Stock Fund" },
        { value:'BD', label: "Bond Debenture" },
      ],
      sleeves: [
        { value:'all', label: "--ALL--" },
        { value:'grf-cd', label: "GRF-CD" },
        { value:'grf-cs', label: "GRF-CS" },
        { value:'grf-en', label: "GRF-EN" },
        { value:'grf-fi', label: "GRF-FI" },
      ]
    };

  }

  handleChangeCheckBox = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChangeInput = prop => event => {
    console.log('props ', prop)
    this.setState({ [prop]: event.target.value });
  };

  handleChangeSelect = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render(){
    const { classes } = this.props;
    return(
        <div className={classes.root}>
          <div className={classes.firstSection}>
              <div className={classes.columnPortfolioInfo}>
                <Typography style={{display: 'inline-block', marginRight: '15px'}} className={classNames(classes.heading)}>Affiliated Fund</Typography>
                <Typography style={{display: 'inline-block'}} className={classNames(classes.secondaryHeading, classes.helper)}>Calibrated Equity Income Benchmark</Typography>
                <Typography style={{display: 'inline-block'}} className={classNames(classes.secondaryHeading, classes.helper)}>129 Holdings</Typography>
                <Typography style={{display: 'inline-block'}} className={classNames(classes.secondaryHeading, classes.helper)}>6,398.52 Market Value ($MM)</Typography>
                <Typography style={{display: 'inline-block'}} className={classNames(classes.secondaryHeading, classes.helper)}>32.26 Cash ($MM)</Typography>
                <Typography style={{display: 'inline-block'}} className={classNames(classes.secondaryHeading, classes.helper)}>7.23 Accrued Income ($MM)</Typography>
              </div>

              <div className={classes.stockLookup} style={{display: 'flex', justifyContent: 'flex-end' }}>
              <span>
                <Input
                  placeholder="Ticker"
                  className={classes.inputTicker}
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                />
            
                
                  <Button variant="contained" color="default" size="small" className={classes.button}>
                    Lookup
                    <Icon className={classNames(classes.rightIcon, classes.iconSmall)}>send</Icon>
                  </Button>
                </span>
                <span>
                  <Button href="#text-buttons" className={classes.button} size="small">
                    Messages
                  </Button>
                  <Button href="#text-buttons" className={classes.button} size="small">
                    FAQ
                  </Button>
                  <Button href="#text-buttons" className={classes.button} size="small">
                    Logout
                  </Button>
                </span>

              </div>
      
            </div>
  
              <FormGroup style={{ }} row>
              
               <span style={{}}>
                <TextField
                  id="date"
                  label=""
                  type="date"
                  defaultValue=""
                  className={classes.textFieldDate}
                  InputProps={{
                    className: classes.input,
                  }}

                  helperText="Date"
                  margin="normal"
                />
    
                <TextField
                  id="standard-select-portfolio-native"
                  select
                  label=""
                  className={classes.textFieldPortfolio}
                  value={this.state.currency}
                  onChange={this.handleChangeSelect('portfolio')}
                  SelectProps={{
                    native: true,
                    // MenuProps: {
                      className: classes.select,
                    // },
                  }}
         
                  helperText="Please select your portfolio"
                  margin="normal"
                >
                  {this.state.portfolios.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  id="standard-select-sleeve-native"
                  select
                  label=""
                  className={classes.textFieldSleeve}
                  value={this.state.currency}
                  onChange={this.handleChangeSelect('sleeve')}
                  SelectProps={{
                    native: true,
                    // MenuProps: {
                      className: classes.select,
                    // },
                  }}
                  helperText="Please select sleeve"
                  margin="normal"
                >
                  {this.state.sleeves.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </span>
                
              <FormControlLabel
                  classes={{ label: classes.checkbox_label }}
                  control={
                    <Checkbox 
                      className={ classes.checkbox }
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      checked={this.state.checkedA}
                      onChange={this.handleChangeCheckBox('checkedA')}
                      value="checkedA"
                      color="default"
                    />
                  }
                  label="Pending Trade"
                />
                <FormControlLabel
                  classes={{ label: classes.checkbox_label }}
                  control={
                    <Checkbox
                      className={ classes.checkbox }
                      icon={<CheckBoxOutlineBlankIcon fontSize='small'/>}
                      checkedIcon={<CheckBoxIcon fontSize='small' />}
                      checked={this.state.checkedB}
                      onChange={this.handleChangeCheckBox('checkedB')}
                      value="checkedB"
                      color="default"
                    />
                  }
                  label="Show Holdings"
                />
                <FormControlLabel
                  classes={{
                    label: classes.checkbox_label
                  }}
                  control={
                    <Checkbox
                      className={ classes.checkbox }
                      icon={<CheckBoxOutlineBlankIcon fontSize='small'/>}
                      checkedIcon={<CheckBoxIcon fontSize='small' />}
                      checked={this.state.checkedC}
                      onChange={this.handleChangeCheckBox('checkedC')}
                      value="checkedC"
                      color="default"
                    />
                  }
                  label="Show voids with bmrk wt >="
                />

                <FormControl
                  className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
                  aria-describedby="weight-helper-text"
                >
                  <Input
                    id="adornment-weight"
                    value={this.state.bmrkWght}
                    onChange={this.handleChangeInput('bmrkWght')}
                    endAdornment={<InputAdornment classes={{root: classes.adornment }} position="end">%</InputAdornment>}
                    inputProps={{
                      className: classes.input,
                    }}
                  />   
                </FormControl>

              </FormGroup>
     
              <div>
                <div className={classes.columnPortfolioInputs}>
                  <div className={classNames(classes.column)}>
                    <div style={{ fontSize: '12px', margin: '0', padding: '0', textAlign: "right" }}>
                      <span style={{color: 'green'}}>Val Exp &lt; 0 is positioning consistent with model</span> &nbsp;{'|'} &nbsp;
                      <span style={{color: 'red' }}>Val Exp &gt; 0 is inconsistent</span>&nbsp;{'|'} &nbsp; 
                      Copied from the Consensus view &nbsp;{'|'} &nbsp;
                      *Inactive Coverage &nbsp;{'|'} &nbsp;
                      <sup>p</sup> Preliminary &nbsp;{'|'} &nbsp;
                      <sup>u</sup> Under Review 
                    </div>
                  </div>
                </div> 
            </div>

        </div>

    )
  }

}

InfoBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoBar);