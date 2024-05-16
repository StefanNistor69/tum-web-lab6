import React from 'react';
import { AppBar, Toolbar, Typography, Switch, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header({ darkMode, handleToggleDarkMode }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Button component={Link} to="/" color="inherit">
            Storytelling Hub
          </Button>
        </Typography>
        <Typography variant="body1" style={{ marginRight: 10 }}>
          {darkMode ? 'Dark' : 'Light'} Mode
        </Typography>
        <Switch checked={darkMode} onChange={handleToggleDarkMode} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;