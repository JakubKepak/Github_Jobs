import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Styles";

import { differenceBetweenDates } from "../../helpers/helpers";
import Logo from "../../assets/logo.svg";

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

const JobListingItem: React.FC<Props> = ({ jobDetails }) => {
  return (
    <S.MainContainer>
      <S.CompanyLogoContainer>
        <S.CompanyLogo
          src={jobDetails.company_logo ? jobDetails.company_logo : Logo}
          alt={jobDetails.company}
        />
      </S.CompanyLogoContainer>
      <S.ContractInfoContainer>
        <span>{differenceBetweenDates(jobDetails.created_at)} ago</span>
        <span></span>
        <span>{jobDetails.type}</span>
      </S.ContractInfoContainer>
      <S.TitleInfo>
        <Link to={`/${jobDetails.id}`}>{jobDetails.title}</Link>
      </S.TitleInfo>
      <S.CompanyInfo>{jobDetails.company}</S.CompanyInfo>
      <S.LocationInfoContainer>
        {jobDetails.location.split("/").map((location) => {
          return <span key={location.trim()}>{location.trim()},</span>;
        })}
      </S.LocationInfoContainer>
    </S.MainContainer>
  );
};

export default JobListingItem;
