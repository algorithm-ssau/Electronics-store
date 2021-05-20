import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  autoMergeLevel1,
  whiteList: ["currentUser", "orderList"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
// persistor.purge().then();
export default () => {
  return { store, persistor };
};
