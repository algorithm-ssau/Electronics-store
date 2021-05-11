import axios from "axios";
import { ResponseType } from "../interfaces/ResponseType";
import { getPyApiReqURL } from "../utils/URLs";

export interface DevelopersData {
  "Team Lead": string;
  "Database Engineers": string[];
  "Frontend Developers": string[];
  "Backend Developers": string[];
}

export interface DevelopersDataResponseFromBackend {
  responseType: ResponseType["DATA"];
  "Team Lead": DevelopersData["Team Lead"];
  "Database Engineers": DevelopersData["Database Engineers"];
  "Frontend Developers": DevelopersData["Frontend Developers"];
  "Backend Developers": DevelopersData["Backend Developers"];
}

export const devsDataResponseToDevsData = (devsDataResponse: DevelopersDataResponseFromBackend): DevelopersData => {
  return {
    "Team Lead": devsDataResponse["Team Lead"],
    "Backend Developers": devsDataResponse["Backend Developers"],
    "Database Engineers": devsDataResponse["Database Engineers"],
    "Frontend Developers": devsDataResponse["Frontend Developers"],
  };
};

export const fetchDevelopers = async (): Promise<DevelopersData> => {
  return axios.get(getPyApiReqURL("DEVELOPERS")).then((response) => devsDataResponseToDevsData(response.data[0]));
};
