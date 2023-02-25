import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { platform, genres } from '../data/form-data';

const GameCheckbox = () => {
  const { id } = useParams();

  return (
    <Stack direction="row" justifyContent="space-between" gap={2} width={1}>
      <Paper sx={{
        border: 1,
        borderColor: `${id !== undefined ? 'warning.main' : 'primary.main'}`,
        p: 2,
        width: 1,
      }}
      >
        <FormGroup>
          <Typography variant="h6">Genres</Typography>
          {genres.map((item) => (
            <FormControlLabel
              key={item}
              control={<Checkbox color={id !== undefined ? 'warning' : 'primary'} />}
              label={item}
              value={item}
              name="genres"
            />
          ))}
        </FormGroup>
      </Paper>
      <Paper sx={{
        border: 1,
        borderColor: `${id !== undefined ? 'warning.main' : 'primary.main'}`,
        p: 2,
        width: 1,
      }}
      >
        <FormGroup>
          <Typography variant="h6">Platforms</Typography>
          {platform.map((item) => (
            <FormControlLabel
              key={item}
              control={<Checkbox color={id !== undefined ? 'warning' : 'primary'} />}
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
