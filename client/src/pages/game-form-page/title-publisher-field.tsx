import React from 'react';
import { Box, TextField, TextFieldProps } from '@mui/material';

type GameFieldProps = {
  color: TextFieldProps['color']
};

const GameField: React.FC<GameFieldProps> = ({
  color,
}) => (
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
      color={color}
    />
    <TextField
      variant="filled"
      fullWidth
      label="Publisher"
      name="publisher"
      size="small"
      color={color}
    />
  </Box>
);

export default GameField;
