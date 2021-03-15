import { useParams } from "react-router-dom";
import * as S from "./Styles";

import useFetch from "../../hooks/useFetch";

import { differenceBetweenDates } from "../../helpers/helpers";

import Loader from "../UI/Loader";

const JobDetail: React.FC<{}> = () => {
  const { id } = useParams<Record<string, string | undefined>>();

  const { loading, data, error } = useFetch(
    "https://jobs.github.com/positions/" + id + ".json"
  );

  return (
    <>
      <S.MainContainer>
        {!loading ? (
          <>
            <S.HeaderContainer>
              <S.CompanyLogoContainer>
                <S.CompanyLogo src={data.company_logo} />
              </S.CompanyLogoContainer>
              <S.CompanyNameContainer>
                <p>{data.company}</p>
              </S.CompanyNameContainer>
              <S.CompanySiteButton>Company Site</S.CompanySiteButton>
            </S.HeaderContainer>
            <S.BodyContainer>
              <S.BodyHeaderContainer>
                <S.PositionInfoContainer>
                  <S.ContractInfoContainer>
                    <span>{differenceBetweenDates(data.created_at)} ago</span>
                    <span></span>
                    <span>{data.type}</span>
                  </S.ContractInfoContainer>
                  <S.TitleInfo>{data.title}</S.TitleInfo>
                  <S.LocationInfoContainer>
                    {!loading &&
                      data.location.split("/").map((location: string) => {
                        return (
                          <span key={location.trim()}>{location.trim()},</span>
                        );
                      })}
                  </S.LocationInfoContainer>
                </S.PositionInfoContainer>
                <S.ApplyNowButton>Apply Now</S.ApplyNowButton>
              </S.BodyHeaderContainer>
              <S.BodyContentContainer
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></S.BodyContentContainer>
            </S.BodyContainer>
            <S.HowToApplyContainer>
              <p>How to apply</p>
              <S.HowToApplyContentContainer
                dangerouslySetInnerHTML={{ __html: data.how_to_apply }}
              ></S.HowToApplyContentContainer>
            </S.HowToApplyContainer>
          </>
        ) : (
          <Loader />
        )}
      </S.MainContainer>
      {!loading && (
        <S.FooterContainer>
          <S.FooterInnerContainer>
            <S.FooterInfoContiner>
              <p>{data.title}</p>
              <p>{data.company}</p>
            </S.FooterInfoContiner>
            <S.ApplyNowButton>Apply Now</S.ApplyNowButton>
          </S.FooterInnerContainer>
        </S.FooterContainer>
      )}
    </>
  );
};

export default JobDetail;
