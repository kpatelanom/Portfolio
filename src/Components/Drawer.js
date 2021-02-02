import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

import img from './../Image/img.JPG';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: '50%',
    marginLeft: 20,
    marginTop: 30,
    textAlign: 'center',
    border: '7px solid #2e344e',
  },
  paper: {
    background: '#191d2b',
  },
  listItem: {
    borderTop: '1px solid #2e344e',
    borderBottom: '1px solid #2e344e',
    marginTop: 25,
  },
  text: {
    color: '#a4acc4',
    textAlign: 'center',
    fontWeight: 100,
  },
  copyRigth: {
    textAlign: 'center',
    fontSize: '16xp',
    fontWeight: '100',
    color: '#a4acc4',
    paddingTop: 10,
  },
  buttonBack: {
    background: '#2e344e',
  },
  menu: {
    fontSize: 50,
    color: '#fff',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    console.log(open);
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, left: open });
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div>
        <img alt='Remy Sharp' src={img} className={clsx(classes.img)} />
      </div>

      <List className={clsx(classes.listItem)}>
        {['HOME', 'ABOUT', 'RESUME', 'PORTFOLIOS', 'BLOGS', 'CONTACT'].map(
          (text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} className={clsx(classes.text)} />
            </ListItem>
          )
        )}
      </List>
      <p className={clsx(classes.copyRigth)}>
        &copy;<span>kpatel</span>
      </p>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} className={clsx(classes.buttonBack)}>
        <MenuIcon className={clsx(classes.menu)} />
      </Button>
      <Drawer
        open={state['left']}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.paper }}
      >
        {list()}
      </Drawer>
    </div>
  );
}
