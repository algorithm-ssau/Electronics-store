/**
 *
 * @param entity Entity of database. Possible values: CUSTOMER,PRODUCT,ORDER,TEMPLATE
 * @param method HTTP Method. Possible values: GET,POST,PUT,DELETE
 * @param req Request string
 * @returns String value of valid URL
 */

type DataBaseEntityType = "CUSTOMER" | "PRODUCT" | "ORDER" | "TEMPLATE";
type DataBaseMethodType = "GET" | "POST" | "PUT" | "DELETE";
export const getDBReqURL = (entity: DataBaseEntityType, method: DataBaseMethodType, req = ""): string => {
  let tURL: string = "";
  switch (entity) {
    case "CUSTOMER": {
      tURL = "api/customers";
      break;
    }
    case "PRODUCT": {
      tURL = "api/products";
      break;
    }
    case "ORDER": {
      tURL = "api/orders";
      break;
    }
    case "TEMPLATE": {
      tURL = "api/templates";
      break;
    }
    default:
      break;
  }

  return `http://localhost:5000/${tURL}/${method.toLowerCase()}/${req}`;
};

/**
 *
 * @param side Side of application. Possible values: SERVER,CLIENT,DEVS
 * @param mode Possible values: LU (last update) and VER (version)
 * @returns String value of valid URL
 * @description if side == "DEVS" mode have to be null-value
 */
type ApiEntityType = "SERVER" | "CLIENT" | "DEVELOPERS";
type ApiModeType = "LAST_UPDATE" | "VERSION" | "";
export const getPyApiReqURL = (side: ApiEntityType, mode: ApiModeType = "") => {
  let tURL: string = "";
  switch (side) {
    case "SERVER": {
      tURL = "api/appinfo/server";
      break;
    }
    case "CLIENT": {
      tURL = "api/appinfo/client";
      break;
    }
    case "DEVELOPERS": {
      tURL = "api/appinfo/developers";
      break;
    }
    default:
      break;
  }
  switch (mode) {
    case "LAST_UPDATE": {
      tURL += "/last_update";
      break;
    }
    case "VERSION": {
      tURL += "/version";
      break;
    }
    default:
      break;
  }
  return `http://localhost:5000/${tURL}`;
};
