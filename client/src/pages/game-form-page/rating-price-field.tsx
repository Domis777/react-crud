import React from 'react';
import { TextField, Stack, TextFieldProps } from '@mui/material';

type GameNumberFieldProps = {
  color: TextFieldProps['color']
  ratingValue?: number
  priceValue?: string
};

const GameNumberField: React.FC<GameNumberFieldProps> = ({
  color,
  ratingValue,
  priceValue,
}) => (
  <Stack direction="row" justifyContent="space-between" gap={2} width={1}>
    <TextField
      variant="filled"
      fullWidth
      label="Rating 1 - 100"
      name="rating"
      size="small"
      defaultValue={ratingValue}
      color={color}
    />
    <TextField
      variant="filled"
      fullWidth
      label="Price"
      name="price"
      size="small"
      defaultValue={priceValue}
      color={color}
    />
  </Stack>
);

export default GameNumberField;
