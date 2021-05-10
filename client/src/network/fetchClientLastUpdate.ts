import axios from "axios";
import { ResponseType } from "../interfaces/ResponseType";
import { getPyApiReqURL } from "../utils/URLs";

export interface ClientLastUpdate {
  clientLastUpdate: string;
}

export interface ClientLastUpdateResponseFromBackend {
  responseType: ResponseType["DATA"];
  client_last_update: ClientLastUpdate["clientLastUpdate"];
}

export const clientLastUpdateResponseToClientLastUpdate = (
  clientLastUpdateResponse: ClientLastUpdateResponseFromBackend
): ClientLastUpdate => {
  return { clientLastUpdate: clientLastUpdateResponse.client_last_update };
};

export const fetchClientLastUpdate = async (): Promise<ClientLastUpdate> => {
  return axios
    .get(getPyApiReqURL("CLIENT", "LAST_UPDATE"))
    .then((response) => clientLastUpdateResponseToClientLastUpdate(response.data[0]));
};
