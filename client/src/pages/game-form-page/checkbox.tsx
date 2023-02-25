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
};

const GameCheckbox: React.FC<GameCheckboxProps> = ({
  CheckboxColor,
  paperColor,
}) => (
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
            control={<Checkbox color={CheckboxColor} />}
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
            control={<Checkbox color={CheckboxColor} />}
            label={item}
            value={item}
            name="platforms"
          />
        ))}
      </FormGroup>
    </Paper>
  </Stack>
);

export default GameCheckbox;
