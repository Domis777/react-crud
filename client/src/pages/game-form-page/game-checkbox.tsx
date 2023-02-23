import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { platform, genres } from './form-data';

const GameCheckbox = () => (
  <Stack direction="row" justifyContent="space-between" gap={2} width={1}>
    <Paper sx={{
      border: 1,
      borderColor: 'primary.main',
      p: 2,
      width: 1,
    }}
    >
      <FormGroup>
        <Typography variant="h6">Genres</Typography>
        {genres.map((item) => (
          <FormControlLabel
            key={item}
            control={<Checkbox />}
            label={item}
          />
        ))}
      </FormGroup>
    </Paper>
    <Paper sx={{
      border: 1,
      borderColor: 'primary.main',
      p: 2,
      width: 1,
    }}
    >
      <FormGroup>
        <Typography variant="h6">Platforms</Typography>
        {platform.map((item) => (
          <FormControlLabel
            key={item}
            control={<Checkbox />}
            label={item}
          />
        ))}
      </FormGroup>
    </Paper>
  </Stack>
);

export default GameCheckbox;
