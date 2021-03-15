import React from "react";
import * as S from "./Styles";

import IconMoon from "../../assets/icon-moon.svg";
import IconSun from "../../assets/icon-sun.svg";

const Header: React.FC<{ toggleThemes: (isDarkTheme: boolean) => void }> = ({
  toggleThemes,
}): JSX.Element => {
  return (
    <S.MainContainer>
      <S.ContainerInner>
        <S.Logo>devjobs</S.Logo>
        <S.ToggleThemeContainer>
          <S.ToggleThemeContainerInner>
            <S.ToggleThemeIcon src={IconSun} alt="ligh theme icon" />
            <S.ToggleButton>
              <input
                type="checkbox"
                onChange={(e) => toggleThemes(e.target.checked)}
              />
              <span></span>
            </S.ToggleButton>
            <S.ToggleThemeIcon src={IconMoon} alt="dark theme icon" />
          </S.ToggleThemeContainerInner>
        </S.ToggleThemeContainer>
      </S.ContainerInner>
    </S.MainContainer>
  );
};

export default Header;
