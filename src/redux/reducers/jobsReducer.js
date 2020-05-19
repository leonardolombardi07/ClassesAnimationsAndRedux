import _ from "lodash";

import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  SAVE_JOB,
  RESET_SAVED_JOBS,
} from "../actions/types";

const initialState = {
  loadingJobs: false,
  jobList: [],
  savedJobs: [],
  errorMessage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        loadingJobs: true,
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        loadingJobs: false,
        jobList: action.payload,
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        loadingJobs: false,
        errorMessage: action.payload,
      };
    case SAVE_JOB:
      return {
        ...state,
        savedJobs: _.uniqBy([action.payload, ...state.savedJobs], "jobkey"),
      };
    case RESET_SAVED_JOBS:
      return {
        ...state,
        savedJobs: [],
      };
    default:
      return state;
  }
};
