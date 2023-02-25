import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  CheckboxProps,
} from '@mui/material';
import { platform, genres } from '../form-data';
import * as Styled from './styled/checkbox-styled';

type GameCheckboxProps = {
  CheckboxColor: CheckboxProps['color']
  paperColor: string
  isCheckGenres?: string[]
  isCheckPlatforms?: string[]
};

const GameCheckbox: React.FC<GameCheckboxProps> = ({
  CheckboxColor,
  paperColor,
  isCheckGenres,
  isCheckPlatforms,
}) => {
  const isCheck = (
    (paper: string[] | undefined, item: string) => (paper || [])
      .includes(item)
  );

  return (
    <Styled.StyledCheckboxContainer>
      <Styled.StyledCheckBoxPaper sx={{
        borderColor: paperColor,
      }}
      >
        <FormGroup>
          <Typography variant="h6">Genres</Typography>
          {genres.map((item) => (
            <FormControlLabel
              key={item}
              control={(
                <Checkbox
                  color={CheckboxColor}
                  defaultChecked={isCheck(isCheckGenres, item)}
                />
              )}
              label={item}
              value={item}
              name="genres"
            />
          ))}
        </FormGroup>
      </Styled.StyledCheckBoxPaper>
      <Styled.StyledCheckBoxPaper sx={{
        borderColor: paperColor,
      }}
      >
        <FormGroup>
          <Typography variant="h6">Platforms</Typography>
          {platform.map((item) => (
            <FormControlLabel
              key={item}
              control={(
                <Checkbox
                  color={CheckboxColor}
                  defaultChecked={isCheck(isCheckPlatforms, item)}
                />
              )}
              label={item}
              value={item}
              name="platforms"
            />
          ))}
        </FormGroup>
      </Styled.StyledCheckBoxPaper>
    </Styled.StyledCheckboxContainer>
  );
};

export default GameCheckbox;
