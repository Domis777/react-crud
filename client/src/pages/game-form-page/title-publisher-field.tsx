import React from 'react';
import { Box, TextField, TextFieldProps } from '@mui/material';

type GameFieldProps = {
  color: TextFieldProps['color']
  titleValue?: string
  PublisherValue?: string
};

const GameField: React.FC<GameFieldProps> = ({
  color,
  titleValue,
  PublisherValue,
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
      defaultValue={titleValue}
      color={color}
    />
    <TextField
      variant="filled"
      fullWidth
      label="Publisher"
      name="publisher"
      size="small"
      defaultValue={PublisherValue}
      color={color}
    />
  </Box>
);

export default GameField;
