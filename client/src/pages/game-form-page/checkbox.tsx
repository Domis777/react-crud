import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Stack,
  Typography,
  CheckboxProps,
} from '@mui/material';
import { platform, genres } from '../data/form-data';

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
    <Stack direction="row" justifyContent="space-between" gap={2} width={1}>
      <Paper sx={{
        border: 1,
        borderColor: paperColor,
        p: 2,
        width: 1,
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
      </Paper>
      <Paper sx={{
        border: 1,
        borderColor: paperColor,
        p: 2,
        width: 1,
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
      </Paper>
    </Stack>
  );
};

export default GameCheckbox;
