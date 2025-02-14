import React, { FunctionComponent } from 'react';
import { ButtonProps } from '@mui/material';

import {
  Container,
  PrimaryButton,
  SecondaryButton,
  ErrorButton,
  InfoButton,
} from './button.styled';

const BUTTONS_MAP = {
  ['primary']: PrimaryButton,
  ['secondary']: SecondaryButton,
  ['error']: ErrorButton,
  ['info']: InfoButton,
};

export interface IButtonProps extends ButtonProps {
  color: 'primary' | 'secondary' | 'error' | 'info';
}

const Button: FunctionComponent<IButtonProps> = ({ variant, color, disabled, ...rest }) => {
  const StyledButton = BUTTONS_MAP[color] || BUTTONS_MAP['primary'];

  return (
    <Container disabled={disabled}>
      <StyledButton variant={variant} disabled={disabled} {...rest} />
    </Container>
  );
};

export default Button;
