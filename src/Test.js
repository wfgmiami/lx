import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
      textTransform: 'capitalize'
  }
};

function test(props) {
  const { classes } = props;
    console.log('.......classes', classes)
  return (
    <Button className={ classes.root }
        classes={{
            // root: classes.root,
            label: classes.label
        }}>
      {'class names'}
    </Button>
  );
}

test.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
 
};

export default withStyles(styles)(test);

