import React from 'react';
import {
  InputAdornment,
  TextField,
  IconButton,
  Stack,
  Typography,
  TypographyProps,
  IconProps,
  TextFieldProps,
  IconButtonProps,
} from '@mui/material';
import createId from 'uniqid';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const uniqId = [createId()];

type GameImageFieldProps = {
  FieldColor: TextFieldProps['color']
  TypoColor: TypographyProps['color']
  iconColor: IconProps['color']
  btnColor: IconButtonProps['color']
};

const GameImageField: React.FC<GameImageFieldProps> = ({
  FieldColor,
  TypoColor,
  iconColor,
  btnColor,
}) => {
  const [imgFieldIds, setImgFieldIds] = React.useState<string[]>(uniqId);

  const addImgField = () => setImgFieldIds([...imgFieldIds, createId()]);
  const deleteImgField = (ids: string) => {
    if (imgFieldIds.length > 1) {
      setImgFieldIds([...imgFieldIds.filter((imgId) => imgId !== ids)]);
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
            border: 3,
            borderRadius: '5px',
            p: '5px',
            mr: 0.5,
          }}
          color={btnColor}
          onClick={() => addImgField()}
        >
          <AddPhotoAlternateOutlinedIcon color={iconColor} />
          <Typography
            component="legend"
            color={TypoColor}
            fontWeight="600"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Add Images
          </Typography>
        </IconButton>
      </Stack>
      <Stack sx={{ gap: 2, width: 1 }}>
        {imgFieldIds.map((ids) => (
          <TextField
            key={ids}
            variant="filled"
            fullWidth
            label="Image"
            name="image"
            size="small"
            color={FieldColor}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ gap: 0.5 }}>
                  <IconButton
                    sx={{ border: 2, p: '5px' }}
                    color="error"
                    onClick={() => deleteImgField(ids)}
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
