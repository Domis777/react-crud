import React from 'react';
import { Box, TextField } from '@mui/material';

const GameField = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    width: 1,
    gap: 2,
  }}
  >
    <TextField
      variant="filled"
      fullWidth
      label="Title"
      name="title"
      size="small"
    />
    <TextField
      variant="filled"
      fullWidth
      label="Publisher"
      name="publisher"
      size="small"
    />
  </Box>
);

export default GameField;
