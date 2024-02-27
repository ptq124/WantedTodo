import { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  className?: string;
  children?: ReactNode;
};

const Button = ({
  onClick,
  type = 'button',
  className,
  children,
}: ButtonProps) => {
  return <Wrapper {...{ onClick, type, className }}>{children}</Wrapper>;
};

const Wrapper = styled.button`
  height: 45px;
  border: 3px solid;

  cursor: pointer;
  box-sizing: border-box;

  transition: background-color 0.5s;

  &:hover {
    background: #c1c5c5;
  }
`;

export default Button;
