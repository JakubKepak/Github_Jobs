import { useParams } from "react-router-dom";
import styled from "styled-components";

import useFetch from "../hooks/useFetch";

import headerBackground from "../assets/bg-pattern-header.svg";

import { differenceBetweenDates } from "../helpers/helpers";

import Loader from "./Loader";

const MainContainer = styled.div`
  width: 80%;
  max-width: 730px;
  min-height: calc(100vh - 12rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 8.5rem;
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundColorItem};
`;

const CompanyLogoContainer = styled.div`
  width: 8.5rem;
  height: 100%;
  display: flex;
  align-items: center;
`;

const CompanyLogo = styled.img`
  width: 100%;
  object-fit: contain;
`;

const CompanyNameContainer = styled.div`
  & p:nth-of-type(1) {
    font-weight: 700;
    padding-left: 2rem;
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.fontColorDark};
  }
`;

const CompanySiteButton = styled.button`
  margin-left: auto;
  margin-right: 3rem;
`;

const BodyContainer = styled.div`
  padding: 3rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.backgroundColorItem};
  margin: 2rem 0;
  width: 100%;
`;

const BodyHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

const PositionInfoContainer = styled.div``;

const ContractInfoContainer = styled.div`
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

const TitleInfo = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.fontColorDark};
`;

const LocationInfoContainer = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  font-size: 0.8rem;
  margin-top: 0.7rem;

  & span {
    margin-right: 0.4rem;
  }
`;

const BodyContentContainer = styled.div`
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

const HowToApplyContainer = styled.div`
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

const HowToApplyContentContainer = styled.div`
  & p {
    font-weight: 300;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.backgroundColorItem};
`;

const FooterInnerContainer = styled.div`
  width: 80%;
  max-width: 730px;
  padding: 1rem 0;
  display: flex;
`;

const FooterInfoContiner = styled.div`
  & p:nth-of-type(1) {
    font-weight: 700;
    margin-bottom: 0.7em;
    color: ${(props) => props.theme.colors.fontColorDark};
  }

  & p:nth-of-type(2) {
    color: ${(props) => props.theme.colors.fontColorLight};
  }
`;

const ApplyNowButton = styled.button`
  margin-left: auto;
`;

const JobDetail: React.FC<{}> = () => {
  const { id } = useParams<Record<string, string | undefined>>();

  const { loading, data, error } = useFetch(
    "https://jobs.github.com/positions/" + id + ".json"
  );

  return (
    <>
      <MainContainer>
        {!loading ? (
          <>
            <HeaderContainer>
              <CompanyLogoContainer>
                <CompanyLogo src={data.company_logo} />
              </CompanyLogoContainer>
              <CompanyNameContainer>
                <p>{data.company}</p>
              </CompanyNameContainer>
              <CompanySiteButton>Company Site</CompanySiteButton>
            </HeaderContainer>
            <BodyContainer>
              <BodyHeaderContainer>
                <PositionInfoContainer>
                  <ContractInfoContainer>
                    <span>{differenceBetweenDates(data.created_at)} ago</span>
                    <span></span>
                    <span>{data.type}</span>
                  </ContractInfoContainer>
                  <TitleInfo>{data.title}</TitleInfo>
                  <LocationInfoContainer>
                    {!loading &&
                      data.location.split("/").map((location: string) => {
                        return (
                          <span key={location.trim()}>{location.trim()},</span>
                        );
                      })}
                  </LocationInfoContainer>
                </PositionInfoContainer>
                <ApplyNowButton>Apply Now</ApplyNowButton>
              </BodyHeaderContainer>
              <BodyContentContainer
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></BodyContentContainer>
            </BodyContainer>
            <HowToApplyContainer>
              <p>How to apply</p>
              <HowToApplyContentContainer
                dangerouslySetInnerHTML={{ __html: data.how_to_apply }}
              ></HowToApplyContentContainer>
            </HowToApplyContainer>
          </>
        ) : (
          <Loader />
        )}
      </MainContainer>
      {!loading && (
        <FooterContainer>
          <FooterInnerContainer>
            <FooterInfoContiner>
              <p>{data.title}</p>
              <p>{data.company}</p>
            </FooterInfoContiner>
            <ApplyNowButton>Apply Now</ApplyNowButton>
          </FooterInnerContainer>
        </FooterContainer>
      )}
    </>
  );
};

export default JobDetail;
