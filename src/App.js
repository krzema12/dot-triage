import React from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import DotTriageComponent from './DotTriageComponent';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Paper className={classes.root}>
        <DotTriageComponent
            groupSizeAffected="medium"
            probability="high"
            impact="low"/>
      </Paper>
    </div>
  );
}

export default App;
