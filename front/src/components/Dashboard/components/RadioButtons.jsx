import * as React from 'react';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
      <>
          <div className="flex justify-evenly h-full items-end gap-x-8">
              <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  label="Manuelle"
                  value="a"
                  name="radio-buttons"
                  slotProps={{ input: { "aria-label": "A" } }}
              />
              <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  label="Automatique"
                  value="b"
                  name="radio-buttons"
                  slotProps={{ input: { "aria-label": "B" } }}
              />
          </div>
      </>
  );
}