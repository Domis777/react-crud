import React from 'react';
import { Stack, IconButton } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

type GameIconButtonProps = {
  onClick: VoidFunction
};

const GameIconButton: React.FC<GameIconButtonProps> = ({
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
      sx={{ border: 3, p: 1 }}
      color="success"
      size="large"
    >
      <CheckCircleOutlineOutlinedIcon fontSize="large" />
    </IconButton>
    <IconButton
      size="large"
      sx={{ border: 3, p: 1 }}
      color="error"
      onClick={onClick}
    >
      <CancelOutlinedIcon fontSize="large" />
    </IconButton>
  </Stack>
);

export default GameIconButton;
