import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';

export default function MediaRatio(props) {
  return (
    <Box sx={{ width: 1, my: 1}}>
      <AspectRatio objectFit="cover">
        <img
          src="https://auto.cdn-rivamedia.com/photos/annoncecli/big/fiat-panda-145307201.jpg"
          alt="A beautiful landscape."
        />
      </AspectRatio>
    </Box>
  );
}