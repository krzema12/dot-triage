import React from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import DotTriageComponent from './DotTriageComponent';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 5),
  },
}));

const groupSizeAffectedMarks = [
  {
    value: 1,
    label: 'small',
  },
  {
    value: 2,
    label: 'medium',
  },
  {
    value: 3,
    label: 'high',
  },
];

const probabilityMarks = [
  {
    value: 1,
    label: 'low',
  },
  {
    value: 2,
    label: 'medium',
  },
  {
    value: 3,
    label: 'high',
  },
  {
    value: 4,
    label: 'always',
  },
];

const impactMarks = [
  {
    value: 1,
    label: 'low',
  },
  {
    value: 2,
    label: 'medium',
  },
  {
    value: 3,
    label: 'high',
  },
];

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Paper className={classes.root}>
        <DotTriageComponent
            groupSizeAffected="medium"
            probability="high"
            impact="low"/>
        <Typography gutterBottom>
          Group size affected
        </Typography>
        <Slider
          min={1}
          max={3}
          defaultValue={2}
          aria-labelledby="discrete-slider-restrict"
          step={null}
          marks={groupSizeAffectedMarks}/>
        <Typography gutterBottom>
          Probability
        </Typography>
        <Slider
          min={1}
          max={4}
          defaultValue={3}
          aria-labelledby="discrete-slider-restrict"
          step={null}
          marks={probabilityMarks}/>
        <Typography gutterBottom>
          Impact
        </Typography>
        <Slider
          min={1}
          max={3}
          defaultValue={2}
          aria-labelledby="discrete-slider-restrict"
          step={null}
          marks={impactMarks}/>
      </Paper>
    </div>
  );
}

export default App;
