import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { differenceBetweenDates } from "../helpers/helpers";

// styles
const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 12rem;
  margin-top: 1.5rem;
  padding: 2rem 1.5rem;
  border-radius: ${(props) => props.theme.borderRadius};

  background-color: ${(props) => props.theme.colors.backgroundColorItem};
`;

const CompanyLogoContainer = styled.div`
  position: absolute;
  top: -25px;
  width: 3rem;
  height: 3rem;
  border-radius: 15px;
  background-color: white;
  display: flex;
  align-items: center;
`;

const CompanyLogo = styled.img`
  width: 100%;
  border-radius: 15px;
  object-fit: scale-down;
  font-size: 0.2rem;
`;

const ContractInfoContainer = styled.div`
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

const TitleInfo = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.colors.fontColorDark};
  margin: 0.8rem 0;
`;

const CompanyInfo = styled.span`
  color: ${(props) => props.theme.colors.fontColorLight};
  font-size: 0.8rem;
`;

const LocationInfoContainer = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  font-size: 0.7rem;
  margin-top: auto;

  & span {
    margin-right: 0.4rem;
  }
`;

// definitions
interface Props {
  jobDetails: {
    id: string;
    created_at: string;
    type: string;
    url: string;
    title: string;
    company: string;
    company_logo: string;
    location: string;
  };
}

// component
const JobListingItem: React.FC<Props> = ({ jobDetails }) => {
  // https://jobs.github.com/positions/

  return (
    <MainContainer>
      <CompanyLogoContainer>
        <CompanyLogo src={jobDetails.company_logo} alt={jobDetails.company} />
      </CompanyLogoContainer>
      <ContractInfoContainer>
        <span>{differenceBetweenDates(jobDetails.created_at)} ago</span>
        <span></span>
        <span>{jobDetails.type}</span>
      </ContractInfoContainer>
      <TitleInfo>
        <Link to={`/${jobDetails.id}`}>{jobDetails.title}</Link>
      </TitleInfo>
      <CompanyInfo>{jobDetails.company}</CompanyInfo>
      <LocationInfoContainer>
        {jobDetails.location.split("/").map((location) => {
          return <span key={location.trim()}>{location.trim()},</span>;
        })}
      </LocationInfoContainer>
    </MainContainer>
  );
};

export default JobListingItem;
