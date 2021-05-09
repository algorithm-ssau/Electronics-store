import { ActionMessage } from "./ActionMessage";

export interface BackendMessage {
  error: ActionMessage["error"];
  message: ActionMessage["text"];
}
