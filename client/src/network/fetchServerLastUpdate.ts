import axios from "axios";
import { ResponseType } from "../interfaces/ResponseType";
import { getPyApiReqURL } from "../utils/URLs";

export interface ServerLastUpdate {
  serverLastUpdate: string;
}

export interface ServerLastUpdateResponseFromBackend {
  responseType: ResponseType["DATA"];
  server_last_update: ServerLastUpdate["serverLastUpdate"];
}

export const serverLastUpdateResponseToServerLastUpdate = (
  serverLastUpdateResponse: ServerLastUpdateResponseFromBackend
): ServerLastUpdate => {
  return { serverLastUpdate: serverLastUpdateResponse.server_last_update };
};

export const fetchServerLastUpdate = async (): Promise<ServerLastUpdate> => {
  return axios
    .get(getPyApiReqURL("SERVER", "LAST_UPDATE"))
    .then((response) => serverLastUpdateResponseToServerLastUpdate(response.data[0]));
};
