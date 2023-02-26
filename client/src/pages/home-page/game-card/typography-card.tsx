import React from 'react';
import {
  Stack,
} from '@mui/material';
import * as Styled from '../styled/typography-card-styled';

type TypographyCardProps = {
  title: string
  genres: string
  platforms: string
  publisher: string
};

const TypographyCard: React.FC<TypographyCardProps> = ({
  title,
  genres,
  platforms,
  publisher,
}) => (
  <Styled.TypographyCardContainer>
    <Styled.TypographyCardTitle>
      { title }
    </Styled.TypographyCardTitle>
    <Stack>
      <Styled.TypographyCardContentTitle>
        Genres:
      </Styled.TypographyCardContentTitle>
      <Styled.TypographyCardContent>
        {genres}
      </Styled.TypographyCardContent>
    </Stack>
    <Stack>
      <Styled.TypographyCardContentTitle>
        Platforms:
      </Styled.TypographyCardContentTitle>
      <Styled.TypographyCardContent>
        {platforms}
      </Styled.TypographyCardContent>
    </Stack>
    <Stack>
      <Styled.TypographyCardContentTitle>
        Publisher:
      </Styled.TypographyCardContentTitle>
      <Styled.TypographyCardContent>
        {publisher}
      </Styled.TypographyCardContent>
    </Stack>
  </Styled.TypographyCardContainer>
);

export default TypographyCard;
