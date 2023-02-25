import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import StyledTitlePublisherContainer from './styled/title-publisher-styled';

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
  <StyledTitlePublisherContainer>
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
  </StyledTitlePublisherContainer>
);

export default GameField;
