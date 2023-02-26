import React from 'react';
import { Rating } from '@mui/material';
import ratings from '../rating-count';
import * as Styled from './styled/typography-styled';
import * as StyledBox from './styled/styled';

type SingleGameTypographyProps = {
  title: string
  genres: string
  platforms: string
  publisher: string
  price: string
  rating: number
};

const SingleGameTypography: React.FC<SingleGameTypographyProps> = ({
  title,
  genres,
  platforms,
  publisher,
  price,
  rating,
}) => (
  <StyledBox.BoxContainer>
    <Styled.TypographyTitle>
      {title}
    </Styled.TypographyTitle>
    <Styled.TypographyContentTitle>
      Genres:
    </Styled.TypographyContentTitle>
    <Styled.TypographyContent>
      {genres}
    </Styled.TypographyContent>
    <Styled.TypographyContentTitle>
      Platforms:
    </Styled.TypographyContentTitle>
    <Styled.TypographyContent>
      {platforms}
    </Styled.TypographyContent>
    <Styled.TypographyContentTitle>
      Publisher:
    </Styled.TypographyContentTitle>
    <Styled.TypographyContent>
      {publisher}
    </Styled.TypographyContent>
    <Styled.TypographyRatingPrice
      color="warning.light"
    >
      {`Rating: ${rating}`}
    </Styled.TypographyRatingPrice>
    <Rating
      name="read-only"
      value={ratings(rating)}
      precision={0.25}
      size="large"
      readOnly
    />

    <Styled.TypographyRatingPrice
      color="success.main"
    >
      {`Price: ${price}`}
    </Styled.TypographyRatingPrice>
  </StyledBox.BoxContainer>
);

export default SingleGameTypography;
