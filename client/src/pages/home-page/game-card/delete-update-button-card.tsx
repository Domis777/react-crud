import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import * as Styled from '../styled/delete-update-button-card-styled';

type DeleteUpdateButtonCardprops = {
  onClick: VoidFunction,
  onDelete: VoidFunction
};

const DeleteUpdateButtonCard: React.FC<DeleteUpdateButtonCardprops> = ({
  onClick,
  onDelete,
}) => (
  <Styled.DeleteUpdateActionButton>
    <Styled.StyledDeleteUpdateButton
      sx={{
        bgcolor: 'warning.main',
        '&:hover': {
          bgcolor: 'warning.light',
        },
      }}
      color="error"
      onClick={onClick}
    >
      <ModeEditOutlinedIcon sx={{
        color: 'common.white',
        fontSize: '25px',
      }}
      />
    </Styled.StyledDeleteUpdateButton>
    <Styled.StyledDeleteUpdateButton
      sx={{
        bgcolor: 'error.main',
        '&:hover': {
          bgcolor: 'error.light',
        },
      }}
      color="error"
      onClick={onDelete}
    >
      <DeleteOutlineIcon sx={{
        color: 'common.white',
        fontSize: '25px',
      }}
      />
    </Styled.StyledDeleteUpdateButton>
  </Styled.DeleteUpdateActionButton>
);

export default DeleteUpdateButtonCard;
