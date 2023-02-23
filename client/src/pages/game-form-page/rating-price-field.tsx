import React from 'react';
import { TextField, Stack } from '@mui/material';

const GameNumberField = () => (
  <Stack direction="row" justifyContent="space-between" gap={2} width={1}>
    <TextField
      variant="filled"
      fullWidth
      label="Rating 1 - 100"
      name="rating"
      size="small"
    />
    <TextField
      variant="filled"
      fullWidth
      label="Price"
      name="price"
      size="small"
    />
  </Stack>
);

export default GameNumberField;
