import React from 'react';
import { TextField, Stack, TextFieldProps } from '@mui/material';

type GameNumberFieldProps = {
  color: TextFieldProps['color']
};

const GameNumberField: React.FC<GameNumberFieldProps> = ({
  color,
}) => (
  <Stack direction="row" justifyContent="space-between" gap={2} width={1}>
    <TextField
      variant="filled"
      fullWidth
      label="Rating 1 - 100"
      name="rating"
      size="small"
      color={color}
    />
    <TextField
      variant="filled"
      fullWidth
      label="Price"
      name="price"
      size="small"
      color={color}
    />
  </Stack>
);

export default GameNumberField;
