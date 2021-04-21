import * as dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

/**
 *
 * @param entity Entity of database. Possible values: CUSTOMER,PRODUCT,ORDER,TEMPLATE
 * @param method HTTP Method. Possible values: GET,POST,PUT,DELETE
 * @returns String value of valid URL
 */
function getDBReqURL(entity: string, method: string): string {
  let tURL: string = "";
  switch (entity) {
    case "CUSTOMER": {
      tURL = String(process.env.CUSTOMER_API_URL);
      break;
    }
    case "PRODUCT": {
      tURL = String(process.env.PRODUCT_API_URL);
      break;
    }
    case "ORDER": {
      tURL = String(process.env.ORDER_API_URL);
      break;
    }
    case "TEMPLATE": {
      tURL = String(process.env.TEMPLATE_API_URL);
      break;
    }
    default:
      break;
  }
  return `${String(process.env.HOST)}:${String(process.env.PORT)}${tURL}/${method}/`;
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
  return `${String(process.env.HOST)}:${String(process.env.PORT)}${tURL}`;
}

export { getDBReqURL, getPyApiReqURL };
