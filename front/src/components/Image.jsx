import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';

export default function Image(props) {
  return (
    <Box sx={{ width: 1, my: 1}}>
      <AspectRatio objectFit="cover">
        <img
          src={props.src}
          alt={props.alt}
        />
      </AspectRatio>
    </Box>
  );
}