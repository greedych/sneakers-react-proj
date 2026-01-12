import { createStore } from "redux";
import sneakerReducer from "../reducers";

const store = createStore(sneakerReducer);

export default store;
