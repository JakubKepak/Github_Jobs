import styled from "styled-components";

import headerBackground from "../../assets/bg-pattern-header.svg";

export const MainContainer = styled.div`
  width: 100%;
  height: 10rem;
  background-color: ${(props) => props.theme.colors.primary};
  background-image: url(${headerBackground});
  background-size: cover;
  border-radius: 0 0 0 110px;
  margin: 0;

  display: flex;
  justify-content: center;

  @media (max-width: 580px) {
    border-radius: 0;
  }
`;

export const ContainerInner = styled.div`
  width: 80%;
  max-width: 1440px;
  margin-top: 3rem;

  display: flex;
  justify-content: space-between;

  color: white;
`;

export const Logo = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

export const ToggleThemeContainer = styled.div``;
export const ToggleThemeContainerInner = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleThemeIcon = styled.img`
  width: 15px;
  height: 15px;
`;

export const ToggleButton = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  margin: 0 0.7rem;

  & input {
    opacity: 0;
  }

  & span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.secondary};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  & span:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primary};
  }

  & input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
