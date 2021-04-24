/**
 *
 * @param entity Entity of database. Possible values: CUSTOMER,PRODUCT,ORDER,TEMPLATE
 * @param method HTTP Method. Possible values: GET,POST,PUT,DELETE
 * @param req Request string
 * @returns String value of valid URL
 */
function getDBReqURL(entity: string, method: string, req: string): string {
  let tURL: string = "http://";
  switch (entity) {
    case "CUSTOMER": {
      tURL = "/api/customers";
      break;
    }
    case "PRODUCT": {
      tURL = "/api/products";
      break;
    }
    case "ORDER": {
      tURL = "/api/orders";
      break;
    }
    case "TEMPLATE": {
      tURL = "/api/templates";
      break;
    }
    default:
      break;
  }

  return `http://localhost:5000${tURL}/${method}/${req}`;
}

/**
 *
 * @param side Side of application. Possible values: SERVER,CLIENT,DEVS
 * @param mode Possible values: LU (last update) and VER (version)
 * @param req Request string
 * @returns String value of valid URL
 * @description if side == "DEVS" mode have to be null-value
 */
function getPyApiReqURL(side: string, mode: string, req: string) {
  let tURL: string = "http://";
  switch (side) {
    case "SERVER": {
      tURL = String(process.env.SERVER_INFO_URL);
      break;
    }
    case "CLIENT": {
      tURL = String(process.env.CLIENT_INFO_URL);
      break;
    }
    case "DEVS": {
      tURL = String(process.env.DEVELOPERS_INFO_URL);
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
    case null: {
      break;
    }
    default:
      break;
  }
  return `${String(process.env.HOST)}:${String(process.env.PORT)}${tURL}/${req}`;
}

export { getDBReqURL, getPyApiReqURL };
