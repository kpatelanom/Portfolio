import Particles from 'react-particles-js';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import particleImg from './../Image/particles.png';
import Drawer from './Drawer';

const useStyles = makeStyles({
  ptext: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '3.2857rem',
    lineHeight: '4rem',
    fontFamily: 'Nunito,sans-serif',
  },
  spanText: {
    color: '#037fff',
  },
});

export default function Canvas() {
  let width = window.innerWidth;
  const classes = useStyles();
  return (
    <div>
      <Drawer />
      <p className={clsx(classes.ptext)}>
        Hi, I am <span className={clsx(classes.spanText)}>Karmvir Patel</span>
      </p>
      <Particles
        params={{
          particles: {
            color: {
              value: '#a4acc4',
            },
            line_linked: {
              shadow: {
                enable: true,
                color: '#a4acc4',
                blur: 5,
              },
            },
            number: {
              value: width < 600 ? 20 : 50,
            },
            size: {
              value: 2,
            },
          },
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
