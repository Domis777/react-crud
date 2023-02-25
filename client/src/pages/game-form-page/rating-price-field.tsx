import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import StyledRatingPriceContainer from './styled/rating-price-styled';

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
  <StyledRatingPriceContainer>
    <TextField
      fullWidth
      variant="filled"
      size="small"
      label="Rating 1 - 100"
      name="rating"
      defaultValue={ratingValue}
      color={color}
    />
    <TextField
      fullWidth
      variant="filled"
      size="small"
      label="Price"
      name="price"
      defaultValue={priceValue}
      color={color}
    />
  </StyledRatingPriceContainer>
);

export default GameNumberField;
