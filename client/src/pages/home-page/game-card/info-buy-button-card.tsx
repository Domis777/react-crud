import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import * as Styled from '../styled/info-buy-button-card-styled';

type InfoBuyButtonCardProps = {
  onClick: VoidFunction
};

const InfoBuyButtonCard: React.FC<InfoBuyButtonCardProps> = ({
  onClick,
}) => (
  <Styled.CardActionsContainer>
    <Styled.StyledIconButton
      sx={{ p: 0.5 }}
      onClick={onClick}
    >
      <InfoOutlinedIcon fontSize="large" />
    </Styled.StyledIconButton>
    <Styled.StyledIconButton>
      <AddShoppingCartIcon fontSize="medium" />
    </Styled.StyledIconButton>
  </Styled.CardActionsContainer>
);

export default InfoBuyButtonCard;
