import React, { useEffect, useReducer } from "react";
import styled from "styled-components";

// components
import JobListingItem from "./JobListingItem";

import useFetch from "../hooks/useFetch";
import { jobListingsReducer } from "../reducers/jobListingsReducer";

import FilterMenu from "./FilterMenu";
import Loader from "./Loader";

const MainContainer = styled.div`
  width: 80%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  margin-top: 6rem;
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 350px));
  grid-gap: 2rem;
  justify-content: center;
`;

const ButtonContainer = styled.button``;

interface Payload {
  description?: string;
  location?: string;
  full_time?: boolean;
}

const JobListingContainer: React.FC<{}> = () => {
  const initialState = {
    url: "https://jobs.github.com/positions.json",
    payload: {
      description: "",
      location: "",
      full_time: false,
    },
    page: 1,
    data: [],
  };

  const [state, dispatch] = useReducer(jobListingsReducer, initialState);
  const { loading, data, error, hasMore } = useFetch(state.url);

  const triggerFilterHandler = (item: Payload) => {
    dispatch({
      type: "setFilter",
      payload: item,
    });
  };

  const loadMoreHandler = () => {
    dispatch({ type: "loadMore" });
  };

  useEffect(() => {
    dispatch({ type: "appendData", payload: data });
  }, [data]);

  return (
    <MainContainer>
      <FilterMenu setPayload={triggerFilterHandler} />
      {!loading ? (
        <>
          <ContentContainer>
            {state.data.map((job: any) => {
              return <JobListingItem jobDetails={job} key={job.id} />;
            })}
          </ContentContainer>
          {hasMore && (
            <ButtonContainer onClick={loadMoreHandler}>
              Load More
            </ButtonContainer>
          )}
        </>
      ) : (
        <Loader />
      )}
    </MainContainer>
  );
};

export default JobListingContainer;
