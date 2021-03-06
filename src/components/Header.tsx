import React from "react";
import styled from "styled-components";

import headerBackground from "../assets/bg-pattern-header.svg";
import IconMoon from "../assets/icon-moon.svg";
import IconSun from "../assets/icon-sun.svg";

const MainContainer = styled.div`
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

const ContainerInner = styled.div`
  width: 80%;
  max-width: 1440px;
  margin-top: 3rem;

  display: flex;
  justify-content: space-between;

  color: white;
`;

const Logo = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

const ToggleThemeContainer = styled.div``;
const ToggleThemeContainerInner = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleThemeIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const ToggleButton = styled.label`
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

const Header: React.FC<{ toggleThemes: (isDarkTheme: boolean) => void }> = ({
  toggleThemes,
}): JSX.Element => {
  return (
    <MainContainer>
      <ContainerInner>
        <Logo>devjobs</Logo>
        <ToggleThemeContainer>
          <ToggleThemeContainerInner>
            <ToggleThemeIcon src={IconSun} alt="ligh theme icon" />
            <ToggleButton>
              <input
                type="checkbox"
                onChange={(e) => toggleThemes(e.target.checked)}
              />
              <span></span>
            </ToggleButton>
            <ToggleThemeIcon src={IconMoon} alt="dark theme icon" />
          </ToggleThemeContainerInner>
        </ToggleThemeContainer>
      </ContainerInner>
    </MainContainer>
  );
};

export default Header;
