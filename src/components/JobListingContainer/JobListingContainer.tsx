import React, { useEffect, useReducer } from "react";
import * as S from "./Styles";

// components
import JobListingItem from "../JobListingItem/JobListingItem";

import useFetch from "../../hooks/useFetch";
import { jobListingsReducer } from "../../reducers/jobListingsReducer";

import FilterMenu from "../FilterMenu/FilterMenu";
import Loader from "../UI/Loader";

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
    <S.MainContainer>
      <FilterMenu setPayload={triggerFilterHandler} />

      <S.ContentContainer>
        {state.data.map((job: any) => {
          return <JobListingItem jobDetails={job} key={job.id} />;
        })}
      </S.ContentContainer>
      {!loading ? (
        hasMore && (
          <S.ButtonContainer onClick={loadMoreHandler}>
            Load More
          </S.ButtonContainer>
        )
      ) : (
        <Loader />
      )}
    </S.MainContainer>
  );
};

export default JobListingContainer;
