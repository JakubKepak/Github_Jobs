import styled from "styled-components";

import headerBackground from "../../assets/bg-pattern-header.svg";

export const MainContainer = styled.div`
  width: 80%;
  max-width: 730px;
  min-height: calc(100vh - 12rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 8.5rem;
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 3rem;
  background-color: ${(props) => props.theme.colors.backgroundColorItem};

  @media (max-width: 600px) {
    flex-direction: column;
    padding-bottom: 1rem;
    padding-right: 0;
  }
`;

export const CompanyLogoContainer = styled.div`
  width: 8.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
    margin-top: -25px;
    border-radius: ${(props) => props.theme.borderRadius};
  }
`;

export const CompanyLogo = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const CompanyNameContainer = styled.div`
  & p:nth-of-type(1) {
    font-weight: 700;
    padding-left: 2rem;
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.fontColorDark};
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

export const BodyContainer = styled.div`
  padding: 3rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.backgroundColorItem};
  margin: 2rem 0;
  width: 100%;

  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

export const BodyHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media (max-width: 600px) {
    flex-direction: column;

    & button {
      width: 100%;
    }
  }
`;

export const PositionInfoContainer = styled.div`
  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }
`;

export const ContractInfoContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.fontColorLight};
  font-size: 0.8rem;
  margin-bottom: 0.7rem;

  & span:nth-last-of-type(2) {
    display: block;
    width: 4px;
    height: 4px;
    background-color: ${(props) => props.theme.colors.fontColorLight};
    border-radius: 50%;
    margin: 0 0.5rem;
  }
`;

export const TitleInfo = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.fontColorDark};

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.4em;
  }
`;

export const LocationInfoContainer = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  font-size: 0.8rem;
  margin-top: 0.7rem;

  & span {
    margin-right: 0.4rem;
  }
`;

export const BodyContentContainer = styled.div`
  color: ${(props) => props.theme.colors.fontColorLight};
  line-height: 1.5rem;

  & strong {
    color: ${(props) => props.theme.colors.fontColorDark};
  }

  & p {
    margin: 1rem 0;
  }

  & h2 {
    color: ${(props) => props.theme.colors.fontColorDark};
  }

  & ul > li {
    margin: 0.5rem 0;
  }
`;

export const HowToApplyContainer = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
  min-height: 10rem;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  background-image: url(${headerBackground});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 7rem;
  padding: 2rem;

  & p {
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

export const HowToApplyContentContainer = styled.div`
  & p {
    font-weight: 300;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.backgroundColorItem};
`;

export const FooterInnerContainer = styled.div`
  width: 80%;
  max-width: 730px;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 420px) {
    width: 90%;

    & button {
      width: 100%;
    }

    justify-content: center;
  }
`;

export const FooterInfoContiner = styled.div`
  & p {
    @media (max-width: 420px) {
      display: none;
    }
  }

  & p:nth-of-type(1) {
    font-weight: 700;
    margin-bottom: 0.7em;
    color: ${(props) => props.theme.colors.fontColorDark};
  }

  & p:nth-of-type(2) {
    color: ${(props) => props.theme.colors.fontColorLight};
  }
`;
