import React from 'react';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import * as Styled from './styled/icon-button-styled';

type GameIconButtonProps = {
  btnText: string
  onClick: VoidFunction
};

const GameIconButton: React.FC<GameIconButtonProps> = ({
  btnText,
  onClick,
}) => (
  <Styled.StyledIconButtonContainer>
    <Styled.StyledIconButton
      color="success"
    >
      <Styled.StyledTypography
        color="success"
      >
        {btnText}
      </Styled.StyledTypography>
      <CheckCircleOutlineOutlinedIcon fontSize="medium" />
    </Styled.StyledIconButton>
    <Styled.StyledIconButton
      color="error"
      onClick={onClick}
    >
      <CancelOutlinedIcon fontSize="medium" />
      <Styled.StyledTypography
        color="error.main"
      >
        Cancel
      </Styled.StyledTypography>
    </Styled.StyledIconButton>
  </Styled.StyledIconButtonContainer>
);

export default GameIconButton;
