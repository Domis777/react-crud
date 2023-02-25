import React from 'react';
import {
  InputAdornment,
  TextField,
  Stack,
  TypographyProps,
  IconProps,
  TextFieldProps,
  IconButtonProps,
} from '@mui/material';
import createId from 'uniqid';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import * as Styled from './styled/img-field-styled';

const uniqId = [createId()];

type GameImageFieldProps = {
  FieldColor: TextFieldProps['color']
  TypoColor: TypographyProps['color']
  iconColor: IconProps['color']
  btnColor: IconButtonProps['color']
  imageValue?: string[]
};

const GameImageField: React.FC<GameImageFieldProps> = ({
  FieldColor,
  TypoColor,
  iconColor,
  btnColor,
  imageValue,
}) => {
  const imgMap = React.useMemo(() => imageValue && imageValue
    .reduce<{ [key: string]: string }>((prevMap, img) => ({
    ...prevMap,
    [createId()]: img,
  }), {}), [imageValue]);

  const [
    imgFieldIds,
    setImgFieldIds,
  ] = React.useState<string[]>((imgMap && Object.keys(imgMap)) || uniqId);

  const addImgField = () => setImgFieldIds([...imgFieldIds, createId()]);
  const deleteImgField = (id: string) => {
    if (imgFieldIds.length > 1) {
      setImgFieldIds([...imgFieldIds.filter((imgId) => imgId !== id)]);
    }
  };

  return (
    <Styled.StyledImgFieldContainer>
      <Styled.StyledImgFieldButton>
        <Styled.StyledIconButton
          color={btnColor}
          onClick={() => addImgField()}
        >
          <AddPhotoAlternateOutlinedIcon color={iconColor} />
          <Styled.StyledTypography
            color={TypoColor}
          >
            Add Images
          </Styled.StyledTypography>
        </Styled.StyledIconButton>
      </Styled.StyledImgFieldButton>
      <Stack sx={{ gap: 2, width: 1 }}>
        {imgFieldIds.map((id) => (
          <TextField
            key={id}
            variant="filled"
            fullWidth
            label="Image"
            name="image"
            size="small"
            defaultValue={imgMap && imgMap[id]}
            color={FieldColor}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ gap: 0.5 }}>
                  <Styled.StyledIconButton
                    sx={{ borderRadius: '50%' }}
                    color="error"
                    onClick={() => deleteImgField(id)}
                  >
                    <DeleteOutlineIcon color="error" />
                  </Styled.StyledIconButton>
                </InputAdornment>
              ),
            }}
          />
        ))}
      </Stack>
    </Styled.StyledImgFieldContainer>
  );
};

export default GameImageField;
