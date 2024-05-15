import React from 'react';
import { AppBar, Toolbar, Typography, Switch } from '@material-ui/core';

function Header({ darkMode, handleToggleDarkMode }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Storytelling Hub
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
