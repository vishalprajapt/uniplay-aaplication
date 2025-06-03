import { createStore } from "redux";
import rootreducer from "./Reducer";


const Store=createStore(rootreducer);

export default Store;