import axios from "axios";
import { ResponseType } from "../interfaces/ResponseType";
import { getPyApiReqURL } from "../utils/URLs";

export interface ClientVersion {
  clientVersion: string;
}

export interface ClientVersionResponseFromBackend {
  responseType: ResponseType["DATA"];
  client_version: ClientVersion["clientVersion"];
}

export const clientVersionResponseToClientVersion = (
  clientVersionResponse: ClientVersionResponseFromBackend
): ClientVersion => {
  return { clientVersion: clientVersionResponse.client_version };
};

export const fetchClientVersion = async (): Promise<ClientVersion> => {
  return axios
    .get(getPyApiReqURL("CLIENT", "VERSION"))
    .then((response) => clientVersionResponseToClientVersion(response.data[0]));
};
