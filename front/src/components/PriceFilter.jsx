import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';
import * as React from 'react';

function valueText(value) {
  return `${value} €`;
}

export default function PriceFilter() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        marks={[
            {
              value: 500,
              label: '500 €',
            },
            {
              value: 5000,
              label: '5 000 €',
            },
          ]}
        min={500}
        max={5000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valueText}
      />
    </Box>
  );
}