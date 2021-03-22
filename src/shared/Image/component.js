import React from 'react';
import { ImageStyle } from './style';

export const ImageComponent = (props) => {
  return (
    <ImageStyle
      src={props.src}
      width={props.width}
      height={props.height}
      {...props}
    />
  );
};
