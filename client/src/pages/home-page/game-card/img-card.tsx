import React from 'react';
import {
  CardMedia,
} from '@mui/material';
import Img from 'components/ui/img';

type ImgCardProps = {
  img: string
};

const ImgCard: React.FC<ImgCardProps> = ({
  img,
}) => (
  <CardMedia>
    <Img
      src={img}
      alt=""
      sx={{
        aspectRatio: '1',
        width: 1,
        borderRadius: '15px',
        border: 3,
        borderColor: 'primary.main',
      }}
    />
  </CardMedia>
);

export default ImgCard;
