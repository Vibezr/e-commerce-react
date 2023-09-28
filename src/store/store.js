import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";




const middlewares = [logger]

const composedEnhancers = compose(applyMiddleware(...middlewares))

 export const store = configureStore({
    rootReducer,
    undefined,
    composedEnhancers
 })