import React from 'react';
import { InputAdornment, TextField, IconButton } from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

const GameImageField = () => (
  <TextField
    variant="filled"
    fullWidth
    label="Image"
    size="small"
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton sx={{ border: 2, p: '5px' }} color="primary">
            <AddPhotoAlternateOutlinedIcon color="primary" />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
);

export default GameImageField;
