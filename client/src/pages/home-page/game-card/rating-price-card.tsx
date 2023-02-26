import React from 'react';
import {
  Stack,
  Rating,
  Typography,
} from '@mui/material';

type RatingPriceCardProps = {
  ratings: number
  price: string
};

const RatingPriceCard: React.FC<RatingPriceCardProps> = ({
  ratings,
  price,
}) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    sx={{ p: 2 }}
  >
    <Rating
      name="read-only"
      value={ratings}
      precision={0.25}
      size="medium"
      readOnly
    />

    <Typography color="success.main">{price}</Typography>
  </Stack>
);

export default RatingPriceCard;
