import React from 'react';
import PropTypes from 'prop-types';
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
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {

  },
  columnPortfolioInfo: {
    flexBasis: '50%',
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
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: 60,
    height: 30,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 2,
  },
  textFieldDate: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150,
  },
  textFieldPortfolio: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  textFieldSleeve: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 100,
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
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className={classes.columnPortfolioInfo}>
                <Typography style={{display: 'inline-block', marginRight: '15px'}} className={classNames(classes.heading)}>Affiliated Fund</Typography>
                <Typography style={{display: 'inline-block'}} className={classNames(classes.secondaryHeading, classes.helper)}>Calibrated Equity Income Benchmark</Typography>
                <Typography style={{display: 'inline-block'}} className={classNames(classes.secondaryHeading, classes.helper)}>129 Holdings</Typography>
                <Typography style={{display: 'inline-block'}} className={classNames(classes.secondaryHeading, classes.helper)}>6,398.52 Market Value ($MM)</Typography>
                <Typography style={{display: 'inline-block'}} className={classNames(classes.secondaryHeading, classes.helper)}>32.26 Cash ($MM)</Typography>
                <Typography style={{display: 'inline-block'}} className={classNames(classes.secondaryHeading, classes.helper)}>7.23 Accrued Income ($MM)</Typography>
              </div>
    
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
            </ExpansionPanelSummary>

            <ExpansionPanelDetails className={classes.details}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedA}
                    onChange={this.handleChangeCheckBox('checkedA')}
                    value="checkedA"
                    color="primary"
                  />
                }
                label="Pending Trade"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    onChange={this.handleChangeCheckBox('checkedB')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Show Holdings"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedC}
                    onChange={this.handleChangeCheckBox('checkedC')}
                    value="checkedC"
                    color="primary"
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
                  endAdornment={<InputAdornment position="end">%</InputAdornment>}
                  inputProps={{
                    'aria-label': 'Weight',
                  }}
                />   
              </FormControl>
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  defaultValue=""
                  className={classes.textFieldDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
              <TextField
                id="standard-select-portfolio-native"
                select
                label=""
                className={classes.textFieldPortfolio}
                value={this.state.currency}
                onChange={this.handleChangeSelect('portfolio')}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu,
                  },
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
                  MenuProps: {
                    className: classes.menu,
                  },
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
            </FormGroup>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>

    )
  }

}

InfoBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoBar);