import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { orange, green } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';




const useStyles = makeStyles({
  root:{
    background: 'linear-gradient(45deg, #fe6b8b, #ff8e53)',
    border: 0,
    borderRadius: 15,
    margin: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fortSize: 36,
    }
  },
  // palette: {
  //   primary:{
  //     main: orange[400],  
  //   },
  //   secondary:{
  //     main: green[400],  
  //   },
  // }
})

function ButtonStyle(){
  const classes = useStyles();
  return <Button className={classes.root}>Test Style Button</Button>
}

function CheckboxExample(){
  const [checked, setChecked] = React.useState(true)
  return(
    <FormControlLabel
       control = {<Checkbox
        checked={checked}
        icon={<DeleteIcon/>}
        checkedIcon={<SaveIcon/>}
        onChange={(e)=>setChecked(e.target.checked)}
        color="secondary"
        inputProps ={{
          'aria-label': 'secondary checkbox'
        }}
      />}
      label="Test Checkbox"
    />
  )
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='md'>
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUi Theming
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2">
              Welcome to MUi
            </Typography>
            <Typography variant="subtitle3" component="div">
              Learn how to use Material Ui
            </Typography>
            <ButtonStyle/>
            <TextField
              variant="filled"
              color="secondary"
              type="email"
              label="The time"
              placeholder="test@test.com"
            />
            <br />

            <Grid container spacing={2} justify="center">
              <Grid item xs={3}>
                <Paper style={{ height:75, width: '100%', background: 'red',}}/>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height:75, width:'100%',}}/>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height:75,width:'100%',}}/>
              </Grid>

            </Grid>


            <CheckboxExample />
            <ButtonGroup  size="large" variant="contained" color="primary">
              <Button startIcon={<SaveIcon/>} >
                  Save
              </Button>
              <Button startIcon={<DeleteIcon/>}>
                  Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
