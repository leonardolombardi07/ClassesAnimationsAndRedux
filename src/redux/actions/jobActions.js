import axios from "axios";
const reverseGeocode = require("latlng-to-zip");
import qs from "qs";

import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  SAVE_JOB,
  RESET_SAVED_JOBS,
} from "./types";
import { INDEED_PUBLISHER_KEY } from "../../services/apis/IndeedApi";
import { GOOGLE_API_KEY } from "../../services/Google";
import * as RootNavigation from "../../routes/RootNavigation";

const JOB_BASE_URL = "https://api.indeed.com/ads/apisearch?";

const JOB_QUERY_PARAMS = {
  publisher: INDEED_PUBLISHER_KEY,
  format: "json",
  v: "2",
  latlong: 1,
  radius: 10,
  q: "javascript", // select type of job! implement later
};

const buildJobsUrl = (zipCode) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zipCode });
  return `${JOB_BASE_URL}${query}`;
};

export const fetchJobs = (region) => async (dispatch) => {
  dispatch({ type: FETCH_JOBS_REQUEST });
  try {
    const zipCode = await reverseGeocode(region, GOOGLE_API_KEY);
    const url = buildJobsUrl(zipCode);
    const response = await axios.get(url);
    dispatch({ type: FETCH_JOBS_SUCCESS, payload: response.data.results });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_JOBS_FAILURE, payload: response.data.results });
  } finally {
    RootNavigation.navigate("RateScreen");
  }
};

export const saveJob = (job) => ({ type: SAVE_JOB, payload: job });

export const resetSavedJobs = () => ({ type: RESET_SAVED_JOBS });
