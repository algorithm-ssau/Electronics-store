import axios from "axios";
import { ResponseType } from "../interfaces/ResponseType";
import { getPyApiReqURL } from "../utils/URLs";

export interface ServerVersion {
  serverVersion: string;
}

export interface ServerVersionResponseFromBackend {
  responseType: ResponseType["DATA"];
  server_version: ServerVersion["serverVersion"];
}

export const serverVersionResponseToServerVersion = (
  serverVersionResponse: ServerVersionResponseFromBackend
): ServerVersion => {
  return { serverVersion: serverVersionResponse.server_version };
};

export const fetchServerVersion = async (): Promise<ServerVersion> => {
  return axios
    .get(getPyApiReqURL("SERVER", "VERSION"))
    .then((response) => serverVersionResponseToServerVersion(response.data[0]));
};
