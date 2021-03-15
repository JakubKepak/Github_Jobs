import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 12rem;
  margin-top: 1.5rem;
  padding: 2rem 1.5rem;
  border-radius: ${(props) => props.theme.borderRadius};

  background-color: ${(props) => props.theme.colors.backgroundColorItem};
`;

export const CompanyLogoContainer = styled.div`
  position: absolute;
  top: -25px;
  width: 3rem;
  height: 3rem;
  border-radius: 15px;
  background-color: white;
  display: flex;
  align-items: center;
`;

export const CompanyLogo = styled.img`
  width: 100%;
  border-radius: 15px;
  object-fit: scale-down;
  font-size: 0.2rem;
`;

export const ContractInfoContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.fontColorLight};
  font-size: 0.8rem;

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
  color: ${(props) => props.theme.colors.fontColorDark};
  margin: 0.8rem 0;
`;

export const CompanyInfo = styled.span`
  color: ${(props) => props.theme.colors.fontColorLight};
  font-size: 0.8rem;
`;

export const LocationInfoContainer = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  font-size: 0.7rem;
  margin-top: auto;

  & span {
    margin-right: 0.4rem;
  }
`;
