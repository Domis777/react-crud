import React from 'react';
import {
  InputAdornment,
  TextField,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import createId from 'uniqid';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const uniqId = [createId()];

const GameImageField = () => {
  const [imgFieldIds, setImgFieldIds] = React.useState<string[]>(uniqId);

  const addImgField = () => setImgFieldIds([...imgFieldIds, createId()]);
  const deleteImgField = (id: string) => {
    if (imgFieldIds.length > 1) {
      setImgFieldIds([...imgFieldIds.filter((imgId) => imgId !== id)]);
    }
  };

  return (
    <Stack sx={{
      width: 1,
      gap: 1,
      alignItems: 'self-start',
    }}
    >
      <Stack direction="row" alignContent="center" justifyContent="center" sx={{ pb: 1 }}>
        <IconButton
          sx={{
            border: 3, borderRadius: '5px', p: '5px', mr: 0.5,
          }}
          color="primary"
          onClick={() => addImgField()}
        >
          <AddPhotoAlternateOutlinedIcon color="primary" />
          <Typography
            component="legend"
            color="primary.main"
            fontWeight="600"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Add Images
          </Typography>
        </IconButton>
      </Stack>
      <Stack sx={{ gap: 2, width: 1 }}>
        {imgFieldIds.map((id) => (
          <TextField
            key={id}
            variant="filled"
            fullWidth
            label="Image"
            name="image"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ gap: 0.5 }}>
                  <IconButton
                    sx={{ border: 2, p: '5px' }}
                    color="error"
                    onClick={() => deleteImgField(id)}
                  >
                    <DeleteOutlineIcon color="error" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default GameImageField;
