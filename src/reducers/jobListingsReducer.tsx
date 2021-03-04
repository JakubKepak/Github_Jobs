import { paramsToString } from "../helpers/helpers";

interface State {
  url: string;
  payload: {
    description: string;
    location: string;
    full_time: boolean;
  };
  page: number;
  data: any;
}

type Action =
  | { type: "loadMore" }
  | { type: "setFilter"; payload: any }
  | { type: "appendData"; payload: any };

export const jobListingsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "loadMore":
      return {
        url: `https://jobs.github.com/positions.json/${paramsToString(
          state.payload
        )}page=${state.page + 1}`,
        payload: state.payload,
        page: state.page + 1,
        data: state.data,
      };
    case "setFilter":
      return {
        url:
          "https://jobs.github.com/positions.json/" +
          paramsToString(action.payload),
        payload: action.payload,
        page: 1,
        data: [],
      };
    case "appendData":
      return {
        url: state.url,
        payload: state.payload,
        page: state.page,
        data: [...state.data, ...action.payload],
      };
  }
};
