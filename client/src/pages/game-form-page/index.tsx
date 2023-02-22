import React from 'react';
import {
  Stack,
  Typography,
  Paper,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
  // ImageList,
  // ImageListItem,
  // ImageListItemBar,
} from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { /* itemData, */ platform, genres } from './form-data';

const GameFormPage = () => (
  <Stack sx={{
    py: { xs: 2, md: 4, xl: 6 },
    px: 2,
    alignItems: 'center',
  }}
  >
    <Paper
      component="form"
      elevation={6}
      sx={{
        border: 3,
        borderColor: 'primary.main',
        p: 3,
        boxShadow: '5px 5px 10px 0 common.black',
        borderRadius: '15px',
        width: (theme) => ({ xs: 1, sm: theme.breakpoints.values.sm }),
      }}
    >
      <Stack sx={{ gap: 2, alignItems: 'center' }}>
        <SportsEsportsIcon sx={{ fontSize: 50 }} color="primary" />
        <Typography variant="h5" color="primary">Add new Video Game</Typography>
        <TextField
          variant="filled"
          fullWidth
          label="Title"
          size="small"
        />
        <TextField
          variant="filled"
          fullWidth
          label="Publisher"
          size="small"
        />
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
        <Stack direction="row" justifyContent="space-between" gap={2} width={1}>
          <TextField
            variant="filled"
            fullWidth
            label="Rating 0 - 100"
            size="small"
          />
          <TextField
            variant="filled"
            fullWidth
            label="Price"
            size="small"
          />
        </Stack>
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
        {/* <ImageList sx={{ width: 1, height: 250 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} sx={{ m: 0.5 }}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{ background: 'none' }}
                position="bottom"
                actionPosition="right"
                actionIcon={(
                  <IconButton
                    sx={{ border: 2, p: '4px', m: '4px' }}
                    color="error"
                  >
                    <DeleteForeverOutlinedIcon color="error" />
                  </IconButton>
              )}
              />
            </ImageListItem>
          ))}
        </ImageList> */}
      </Stack>
      <Stack sx={{ mt: 3 }} direction="row" justifyContent="space-evenly" gap={2} width={1}>
        <IconButton sx={{ border: 3, p: 1 }} color="success" size="large">
          <CheckCircleOutlineOutlinedIcon fontSize="large" />
        </IconButton>
        <IconButton size="large" sx={{ border: 3, p: 1 }} color="error">
          <CancelOutlinedIcon fontSize="large" />
        </IconButton>
      </Stack>
    </Paper>
  </Stack>
);

export default GameFormPage;
