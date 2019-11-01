import React, { useState } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import DotTriageComponent from './DotTriageComponent';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 5),
    margin: theme.spacing(5, 5),
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
    label: 'large',
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

function categoricalValue(marks, value) {
  return marks.find(mark => mark.value === value).label;
}

function App() {
  const classes = useStyles();

  const [groupSizeAffected, setGroupSizeAffected] = useState(2)
  const [probability, setProbability] = useState(3)
  const [impact, setImpact] = useState(2)

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Paper className={classes.root}>
          <div style={{textAlign: 'center'}}>
            <DotTriageComponent
                groupSizeAffected={categoricalValue(groupSizeAffectedMarks, groupSizeAffected)}
                probability={categoricalValue(probabilityMarks, probability)}
                impact={categoricalValue(impactMarks, impact)}/>
          </div>
          <Typography gutterBottom>
            Group size affected
          </Typography>
          <Slider
            min={1}
            max={3}
            defaultValue={groupSizeAffected}
            aria-labelledby="discrete-slider-restrict"
            step={null}
            marks={groupSizeAffectedMarks}
            onChange={(event, value) => setGroupSizeAffected(value)}/>
          <Typography gutterBottom>
            Probability
          </Typography>
          <Slider
            min={1}
            max={4}
            defaultValue={probability}
            aria-labelledby="discrete-slider-restrict"
            step={null}
            marks={probabilityMarks}
            onChange={(event, value) => setProbability(value)}/>
          <Typography gutterBottom>
            Impact
          </Typography>
          <Slider
            min={1}
            max={3}
            defaultValue={impact}
            aria-labelledby="discrete-slider-restrict"
            step={null}
            marks={impactMarks}
            onChange={(event, value) => setImpact(value)}/>
          <Divider style={{margin: '20px 0'}}/>
          <Typography gutterBottom>
            Suggested order of priorities
          </Typography>
          <DotTriageComponent groupSizeAffected="small" probability="low" impact="low" size="40px"/>
          <DotTriageComponent groupSizeAffected="medium" probability="low" impact="low" size="40px"/>
          <DotTriageComponent groupSizeAffected="large" probability="low" impact="low" size="40px"/>
          <DotTriageComponent groupSizeAffected="small" probability="medium" impact="low" size="40px"/>
          <DotTriageComponent groupSizeAffected="medium" probability="medium" impact="low" size="40px"/>
          <DotTriageComponent groupSizeAffected="large" probability="medium" impact="low" size="40px"/>
          <DotTriageComponent groupSizeAffected="small" probability="high" impact="low" size="40px"/>
          <DotTriageComponent groupSizeAffected="medium" probability="high" impact="low" size="40px"/>
          <DotTriageComponent groupSizeAffected="large" probability="high" impact="low" size="40px"/>
          <DotTriageComponent groupSizeAffected="small" probability="always" impact="low" size="40px"/>
          <DotTriageComponent groupSizeAffected="medium" probability="always" impact="low" size="40px"/>
          <DotTriageComponent groupSizeAffected="large" probability="always" impact="low" size="40px"/>
          <DotTriageComponent groupSizeAffected="small" probability="low" impact="medium" size="40px"/>
          <DotTriageComponent groupSizeAffected="medium" probability="low" impact="medium" size="40px"/>
          <DotTriageComponent groupSizeAffected="large" probability="low" impact="medium" size="40px"/>
          <DotTriageComponent groupSizeAffected="small" probability="medium" impact="medium" size="40px"/>
          <DotTriageComponent groupSizeAffected="medium" probability="medium" impact="medium" size="40px"/>
          <DotTriageComponent groupSizeAffected="large" probability="medium" impact="medium" size="40px"/>
          <DotTriageComponent groupSizeAffected="small" probability="high" impact="medium" size="40px"/>
          <DotTriageComponent groupSizeAffected="medium" probability="high" impact="medium" size="40px"/>
          <DotTriageComponent groupSizeAffected="large" probability="high" impact="medium" size="40px"/>
          <DotTriageComponent groupSizeAffected="small" probability="always" impact="medium" size="40px"/>
          <DotTriageComponent groupSizeAffected="medium" probability="always" impact="medium" size="40px"/>
          <DotTriageComponent groupSizeAffected="large" probability="always" impact="medium" size="40px"/>
          <DotTriageComponent groupSizeAffected="small" probability="low" impact="high" size="40px"/>
          <DotTriageComponent groupSizeAffected="medium" probability="low" impact="high" size="40px"/>
          <DotTriageComponent groupSizeAffected="large" probability="low" impact="high" size="40px"/>
          <DotTriageComponent groupSizeAffected="small" probability="medium" impact="high" size="40px"/>
          <DotTriageComponent groupSizeAffected="medium" probability="medium" impact="high" size="40px"/>
          <DotTriageComponent groupSizeAffected="large" probability="medium" impact="high" size="40px"/>
          <DotTriageComponent groupSizeAffected="small" probability="high" impact="high" size="40px"/>
          <DotTriageComponent groupSizeAffected="medium" probability="high" impact="high" size="40px"/>
          <DotTriageComponent groupSizeAffected="large" probability="high" impact="high" size="40px"/>
          <DotTriageComponent groupSizeAffected="small" probability="always" impact="high" size="40px"/>
          <DotTriageComponent groupSizeAffected="medium" probability="always" impact="high" size="40px"/>
          <DotTriageComponent groupSizeAffected="large" probability="always" impact="high" size="40px"/>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
