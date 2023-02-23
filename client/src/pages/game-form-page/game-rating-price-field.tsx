import React from 'react';
import { TextField, Stack } from '@mui/material';

const GameNumberField = () => (
  <Stack direction="row" justifyContent="space-between" gap={2} width={1}>
    <TextField
      variant="filled"
      fullWidth
      label="Rating 0 - 100"
      size="small"
    />
    <TextField
      variant="filled"
      fullWidth
      label="Price"
      size="small"
    />
  </Stack>
);

export default GameNumberField;
