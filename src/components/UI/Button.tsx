import styled from "styled-components";

const MainContainer = styled.button<{ variant?: string; size: any }>`
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

  ${(props) =>
    props.size === "small" &&
    `
    min-width: 3rem;
`}

  ${(props) =>
    props.size === "max-width" &&
    `
    width: 80%;
    min-width: 3rem;
`}
`;

interface Props {
  variant: "primary" | "secondary";
  size?: "medium" | "small" | "max-width" | undefined;
  children?: any;
  onClick?: any;
  type?: any;
}

export default function Button({
  variant,
  children,
  onClick,
  type,
  size,
}: Props) {
  return (
    <MainContainer type={type} onClick={onClick} variant={variant} size={size}>
      {children}
    </MainContainer>
  );
}
