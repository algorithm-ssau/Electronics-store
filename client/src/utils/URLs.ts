/**
 *
 * @param entity Entity of database. Possible values: CUSTOMER,PRODUCT,ORDER,TEMPLATE
 * @param method HTTP Method. Possible values: GET,POST,PUT,DELETE
 * @param req Request string
 * @returns String value of valid URL
 */
function getDBReqURL(entity: string, method: string, req: string): string {
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
}

/**
 *
 * @param side Side of application. Possible values: SERVER,CLIENT,DEVS
 * @param mode Possible values: LU (last update) and VER (version)
 * @returns String value of valid URL
 * @description if side == "DEVS" mode have to be null-value
 */
function getPyApiReqURL(side: string, mode: string) {
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
    case "DEVS": {
      tURL = "api/appinfo/developers";
      break;
    }
    default:
      break;
  }
  switch (mode) {
    case "LU": {
      tURL += "/last_update";
      break;
    }
    case "VER": {
      tURL += "/version";
      break;
    }
    default:
      break;
  }
  return `http://localhost:5000/${tURL}`;
}

export { getDBReqURL, getPyApiReqURL };
