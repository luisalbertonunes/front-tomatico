import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { useStyles } from './style';

export const AnchorComponent = ({ anchors, ...props }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.rootAnchor}>
      {anchors.map((element, index) => {
        return (
          <Link href={element.href} target={element.target} key={index}>
            {element.text}
          </Link>
        );
      })}
    </Typography>
  );
};
