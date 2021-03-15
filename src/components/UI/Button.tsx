import styled from "styled-components";

const MainContainer = styled.button<{ variant?: string }>`
  font-family: inherit;
  border: none;
  height: 2.5rem;
  min-width: 6rem;
  font-weight: 700;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }

  ${(props) =>
    props.variant === "primary" &&
    `
    background-color: ${props.theme.colors.primary};
    color: ${props.theme.colors.secondary};

    &:hover {
    background-color: ${props.theme.colors.primaryLight};
  }
  `};
`;

interface Props {
  variant: "primary" | "secondary";
  children?: any;
  onClick?: any;
  type?: any;
}

export default function Button({ variant, children, onClick, type }: Props) {
  return (
    <MainContainer type={type} onClick={onClick} variant={variant}>
      {children}
    </MainContainer>
  );
}
