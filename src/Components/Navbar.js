import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css'
import { auth } from '../firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
  },
}));

export default function ButtonAppBar({user}) {
  const history = useHistory()
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <div className='navbar'>

        <AppBar position="relative">

          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>

            {/* <Link to='/login' style={{ margin: 30 }}>Login </Link>
            <Link to='/signup' style={{ margin: 30 }}>Signup </Link> */}
            {
              user?
                <ul style={{ margin: 30}}>
                  <button style={{}} className="btn red" onClick={() => {
                    auth.signOut()
                    history.push('/login')
                  }}>
                    Logout
                  </button>
                </ul>
                :
                <>
                  <Link to='/login' style={{ margin: 30 }}>Login </Link>
                  <Link to='/signup' style={{ margin: 30 }}>Signup </Link>
                </>
            }
            {/* <Typography variant="h6" className={classes.title}>
              <Link to='/menu' style={{margin:30}}>Menu </Link>
            </Typography> */}
          </Toolbar>

        </AppBar>
      </div>
    </div>
  );
}


