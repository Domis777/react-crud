import React from 'react';
import {
  Stack,
  IconButton,
  Typography,
} from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

type GameIconButtonProps = {
  btnText: string
  onClick: VoidFunction
};

const GameIconButton: React.FC<GameIconButtonProps> = ({
  btnText,
  onClick,
}) => (
  <Stack
    sx={{ mt: 3 }}
    direction="row"
    justifyContent="space-evenly"
    gap={2}
    width={1}
  >
    <IconButton
      type="submit"
      sx={{
        border: 3,
        borderRadius: '5px',
        p: '5px',
        mr: 0.5,
      }}
      color="success"
      size="large"
    >
      <Typography
        component="legend"
        color="success"
        fontWeight="600"
        sx={{
          display: 'flex', alignItems: 'center',
        }}
      >
        {btnText}
      </Typography>
      <CheckCircleOutlineOutlinedIcon fontSize="medium" />
    </IconButton>
    <IconButton
      sx={{
        border: 3,
        borderRadius: '5px',
        p: '5px',
        mr: 0.5,
      }}
      color="error"
      onClick={onClick}
    >
      <CancelOutlinedIcon fontSize="medium" />
      <Typography
        component="legend"
        color="error.main"
        fontWeight="600"
        sx={{
          display: 'flex',
          alignItems: 'center',

        }}
      >
        Cancel
      </Typography>
    </IconButton>
  </Stack>
);

export default GameIconButton;
