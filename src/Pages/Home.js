import React from 'react';
import Drawer from './../Components/Drawer';
import Canvas from './../Components/Canvas';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  contain: {},
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={clsx(classes.contain)}>
      {/* <Drawer /> */}
      <Canvas />
    </div>
  );
}
